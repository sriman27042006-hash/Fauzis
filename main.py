from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Client  
import os
import json

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Client(api_key=GROQ_API_KEY)

app = FastAPI(title="CodeRefine - AI Code Review")


origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CodeRequest(BaseModel):
    code: str

@app.post("/review")
def review_code(request: CodeRequest):
    """
    Endpoint to review code using AI (Groq LLM)
    Returns a JSON with: bugs, performance, improvements, optimized_code, 
    explanation, complexities, and scores.
    """
    
    prompt = f"""
You are a senior software engineer and code reviewer.

Analyze the following code carefully.

- If the code is already correct and efficient, say 'The code is correct and efficient.'
- Only suggest changes if necessary.
- Provide a quality score out of 100 for the user's original code.
- Provide a quality score out of 100 for your optimized code.
- Determine the Big-O Time and Space complexity ONLY for your optimized code.
- Be concise and technical.

Respond STRICTLY in JSON format exactly matching this schema:
{{
    "bugs": "...",
    "performance": "...",
    "improvements": ["...", "..."],
    "optimized_code": "...",
    "explanation": "...",
    "optimized_time_complexity": "...",
    "optimized_space_complexity": "...",
    "user_code_score": 0,
    "optimized_code_score": 0
}}

Code:
{request.code}
"""
    response = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model="llama-3.3-70b-versatile",  
        temperature=0.2,
        # Enforce JSON output natively via Groq
        response_format={"type": "json_object"} 
    )

    ai_output = response.choices[0].message.content

    try:
        return json.loads(ai_output)
    except Exception:
        # Fallback dictionary now includes the new keys
        return {
            "bugs": "Unable to parse AI response",
            "performance": "N/A",
            "improvements": [],
            "optimized_code": request.code,
            "explanation": ai_output,
            "optimized_time_complexity": "N/A",
            "optimized_space_complexity": "N/A",
            "user_code_score": 0,
            "optimized_code_score": 0
        }