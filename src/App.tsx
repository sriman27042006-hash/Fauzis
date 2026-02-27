import { useState } from 'react'
import './App.css'
import { useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import Editor from './pages/Editor'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app theme-${theme}`}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h2>CodeOptimizer</h2>
          </div>
          
          <div className="nav-links">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('editor')}
              className={`nav-link ${currentPage === 'editor' ? 'active' : ''}`}
            >
              Editor
            </button>
          </div>

          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'editor' && <Editor />}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Code Optimizer. Optimizing code with AI.</p>
      </footer>
    </div>
  )
}

export default App
