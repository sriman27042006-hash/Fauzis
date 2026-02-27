#!/bin/bash

# Startup script for Code Optimizer (Full Stack)
# Runs both frontend and backend servers

echo "🚀 Starting Code Optimizer Full Stack..."
echo ""

# Function to handle cleanup on exit
cleanup() {
  echo ""
  echo "⏹️  Shutting down servers..."
  kill $FRONTEND_PID $BACKEND_PID 2>/dev/null
  exit 0
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM

# Check if backend .env file exists
if [ ! -f "backend/.env" ]; then
  echo "⚠️  backend/.env file not found!"
  echo "Creating from template: backend/.env.example"
  cp backend/.env.example backend/.env
  echo "✅ Created backend/.env"
  echo ""
  echo "⚠️  IMPORTANT: Edit backend/.env and add your GROQ_API_KEY"
  echo "Get your key from: https://console.groq.com"
  echo ""
fi

# Start backend
echo "📦 Starting backend server..."
cd backend
python main.py &
BACKEND_PID=$!
cd ..
sleep 2

# Start frontend
echo "⚛️  Starting frontend server..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Servers started!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
