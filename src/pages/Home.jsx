import { useTheme } from '../context/ThemeContext'
import './Home.css'

const Home = ({ setCurrentPage }) => {
  const { theme } = useTheme()

  return (
    <div className={`home-page theme-${theme}`}>
      <div className="home-container">
        <div className="hero">
          <h1>Code Optimizer</h1>
          <p className="subtitle">Review your code with AI-powered insights and improvements.</p>
          
          <div className="features">
            <div className="feature-card">
              <h3>� Review Code</h3>
              <p>Submit your code for a comprehensive AI review with bugs, performance notes, and improvement suggestions.</p>
            </div>
          </div>

          <div className="cta-buttons">
            <button 
              onClick={() => setCurrentPage('editor')}
              className="btn btn-primary"
            >
              Go to Editor
            </button>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <section id="features" className="info-section">
          <h2>How It Works</h2>
          <ol className="steps">
            <li>
              <strong>Paste Your Code</strong>
              <p>Enter or paste the code you want to optimize into the editor.</p>
            </li>
            <li>
              <strong>Submit for Review</strong>
              <p>Click the review button to send your code to the backend and receive feedback.</p>
            </li>
            <li>
              <strong>Review Results</strong>
              <p>See the optimized code with detailed explanations and improvements.</p>
            </li>
            <li>
              <strong>Copy & Use</strong>
              <p>Copy the improved code and integrate it into your project.</p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default Home
