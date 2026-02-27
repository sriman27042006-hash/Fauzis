# 🚀 Code Optimizer - Full Stack Setup Guide

This is a complete AI-powered code optimizer application built with React + Vite (frontend) and FastAPI (backend) using Groq AI.

## 📋 Project Structure

```
my-react-app/
├── src/                    # React frontend
│   ├── components/        # React components
│   ├── context/           # React context
│   ├── pages/             # Page components
│   ├── services/          # API service
│   └── ...
├── backend/               # FastAPI backend
│   ├── main.py           # FastAPI server
│   ├── requirements.txt   # Python dependencies
│   └── .env              # Backend configuration
├── .env                  # Frontend configuration
├── start.sh              # Full-stack startup script
└── package.json          # Node dependencies
```

## 🔧 Prerequisites

- **Node.js** (v16+) and npm
- **Python** (v3.8+) and pip
- **Groq API Key** (from https://console.groq.com)

## ⚙️ Step 1: Frontend Setup

```bash
# Install Node dependencies
npm install

# Create frontend .env file (already exists)
# If needed, edit .env to change API URL
cat .env
```

## ⚙️ Step 2: Backend Setup

```bash
# Install Python dependencies
cd backend
pip install -r requirements.txt

# Create .env file from template
cp .env.example .env

# Edit .env and add your GROQ_API_KEY
nano .env
# or
vim .env

cd ..
```

### Getting Groq API Key

1. Go to https://console.groq.com
2. Sign up or log in
3. Create an API key
4. Copy the key to `backend/.env`:
   ```
   GROQ_API_KEY=your_key_here
   ```

## 🚀 Quick Start (One Command)

### Option 1: Using Start Script (Recommended)

```bash
# Make it executable (first time only)
chmod +x start.sh

# Run both servers
./start.sh
```

### Option 2: Manual Setup

**Terminal 1 - Backend:**

```bash
cd backend
python main.py
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

## 📱 Access the Application

Once running:

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **API Documentation:** http://localhost:8000/docs (Swagger UI)
- **Alternative API Docs:** http://localhost:8000/redoc (ReDoc)

## 🧪 Testing the API

### Using cURL

```bash
# Optimize code
curl -X POST "http://localhost:8000/api/optimize-code" \
  -H "Content-Type: application/json" \
  -d '{"code":"function add(a,b){return a+b;}"}'

# Analyze code
curl -X POST "http://localhost:8000/api/analyze-code" \
  -H "Content-Type: application/json" \
  -d '{"code":"function add(a,b){return a+b;}"}'

# Health check
curl "http://localhost:8000/health"
```

### Using API Documentation UI

Visit http://localhost:8000/docs and use the interactive Swagger UI to test endpoints.

## 📝 Available Endpoints

| Method | Endpoint                | Purpose          |
| ------ | ----------------------- | ---------------- |
| GET    | `/health`               | Health check     |
| POST   | `/api/optimize-code`    | Optimize code    |
| POST   | `/api/analyze-code`     | Analyze code     |
| POST   | `/api/format-code`      | Format code      |
| POST   | `/api/code-suggestions` | Get suggestions  |
| POST   | `/review`               | Full code review |

## 🔄 How It Works

1. **User enters code** in the React frontend
2. **Frontend sends request** to FastAPI backend
3. **Backend processes code** using Groq AI (Llama 3.3-70B model)
4. **AI returns analysis** with optimizations, bugs, improvements
5. **Frontend displays results** in formatted output

## 📦 Key Dependencies

### Frontend

- React 19.2.0
- Vite 7.3.1
- TypeScript ~5.9.3

### Backend

- FastAPI 0.104.1
- Uvicorn 0.24.0
- Groq 0.4.1
- Python-dotenv 1.0.0

## 🛠️ Development Commands

### Frontend

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
cd backend
python main.py              # Run with default settings
python main.py --port 8001  # Run on different port
```

## 🔍 Troubleshooting

### Port Already in Use

If port 5173 (frontend) or 8000 (backend) is in use:

**Frontend:**

```bash
npm run dev -- --port 5174
```

**Backend:**

```bash
cd backend
python main.py --port 8001
```

Then update `.env`:

```
VITE_API_BASE_URL=http://localhost:8001
```

### GROQ_API_KEY Error

- Check `backend/.env` file exists
- Verify API key is correct
- Visit https://console.groq.com to get/regenerate key

### Python Dependencies Not Found

```bash
cd backend
pip install -r requirements.txt
```

### ModuleNotFoundError: groq

```bash
pip install groq==0.4.1
```

### CORS Issues

- Backend has CORS enabled for all origins (`"*"`)
- Frontend is configured to use correct API URL
- Check `.env` file for correct `VITE_API_BASE_URL`

## 📊 Understanding the Responses

### Optimize Code Response

```json
{
  "optimizedCode": "improved code here",
  "explanation": "what was improved",
  "improvements": ["improvement 1", "improvement 2"]
}
```

### Analyze Code Response

```json
{
  "analysis": "detailed analysis",
  "bugs": ["bug 1", "bug 2"],
  "performance": ["issue 1"],
  "security": ["concern 1"],
  "suggestions": ["suggestion 1"]
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku/AWS)

1. Set `GROQ_API_KEY` environment variable
2. Install dependencies: `pip install -r requirements.txt`
3. Run: `python main.py`

## 📚 Further Reading

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Groq Documentation](https://console.groq.com/docs)

## 🤝 Support

For issues:

1. Check terminal output for error messages
2. Visit http://localhost:8000/docs to test API
3. Check browser DevTools (F12) for frontend errors
4. Ensure Python and Node versions meet requirements

## 📄 License

MIT License - Feel free to use this project!

---

**Happy Coding! 🎉**

For questions or issues, check the documentation in each directory (frontend README.md or backend README.md).
