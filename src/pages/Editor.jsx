import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { reviewCode } from '../services/api';
import { useTheme } from '../context/ThemeContext';
import { Play, Trash2, CheckCircle2, AlertCircle, Zap, Code2, TrendingUp, MessageSquareText, ListChecks } from 'lucide-react';
import './Editor.css';

const CodeEditor = () => {
  const [inputCode, setInputCode] = useState('// Paste your code here...\nfunction example() {\n  console.log("Hello World");\n}');
  const [reviewResult, setReviewResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { theme } = useTheme();

  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  const handleReview = async () => {
    if (!inputCode.trim()) {
      setError('Please enter some code to review');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const result = await reviewCode(inputCode);
      setReviewResult(result);
    } catch (err) {
      setError(err.message || 'Failed to review code');
      setReviewResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputCode('');
    setReviewResult(null);
  };

  return (
    <div className={`editor-wrapper theme-${theme}`}>
      <header className="editor-header">
        <div className="header-left">
          <Code2 size={24} className="brand-icon" />
          <h1>Refine<span className="accent">AI</span></h1>
        </div>
        <div className="header-actions">
          <button onClick={handleClear} className="btn-secondary">
            <Trash2 size={18} /> Clear
          </button>
          <button onClick={handleReview} disabled={loading} className="btn-primary">
            {loading ? <span className="loader"></span> : <><Play size={18} /> Run Review</>}
          </button>
        </div>
      </header>

      <main className="editor-grid">
        {/* Left Side: Monaco Editor */}
        <section className="pane input-pane">
          <div className="pane-header">Source Code</div>
          <div className="monaco-container">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme={editorTheme}
              value={inputCode}
              onChange={(value) => setInputCode(value || '')}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                automaticLayout: true,
                padding: { top: 15 },
                wordWrap: 'on'
              }}
            />
          </div>
        </section>

        {/* Right Side: Results */}
        <section className="pane output-pane">
          <div className="pane-header">Analysis & Optimization</div>
          <div className="output-scroll-area">
            {error && <div className="alert alert-error"><AlertCircle size={20} /> {error}</div>}

            {!reviewResult && !loading && (
              <div className="empty-placeholder">
                <div className="icon-circle"><Code2 size={40} /></div>
                <p>Run a review to get AI insights and optimized code.</p>
              </div>
            )}

            {reviewResult && (
              <div className="results-container">
                {/* 1. Score Cards */}
                <div className="score-section">
                    <div className="metric-card score-card user-score">
                        <span className="label">Original Score</span>
                        <div className="score-val">{reviewResult.user_code_score}<span>/100</span></div>
                    </div>
                    <div className="metric-card score-card ai-score">
                        <span className="label">Optimized Score</span>
                        <div className="score-val">{reviewResult.optimized_code_score}<span>/100</span></div>
                    </div>
                </div>

                {/* 2. Complexity Analysis */}
                <div className="complexity-row">
                    <div className="comp-box">
                        <span className="comp-label">Optimized Time</span>
                        <code className="comp-value">{reviewResult.optimized_time_complexity}</code>
                    </div>
                    <div className="comp-box">
                        <span className="comp-label">Optimized Space</span>
                        <code className="comp-value">{reviewResult.optimized_space_complexity}</code>
                    </div>
                </div>

                {/* 3. Bugs & Performance Overview */}
                <div className="metrics-grid">
                  <div className="metric-card bug-card">
                    <span className="label"><AlertCircle size={14} /> Issues / Bugs</span>
                    <p style={{ margin: '8px 0 0', fontSize: '0.85rem' }}>{reviewResult.bugs}</p>
                  </div>
                  <div className="metric-card perf-card">
                    <span className="label"><Zap size={14} /> Performance</span>
                    <p style={{ margin: '8px 0 0', fontSize: '0.85rem' }}>{reviewResult.performance}</p>
                  </div>
                </div>

                {/* 4. Detailed Explanation (RE-ADDED & PROMINENT) */}
                <div className="result-section">
                  <h3><MessageSquareText size={18} /> AI Reasoning</h3>
                  <div className="explanation-box">
                    <p className="explanation-text">{reviewResult.explanation}</p>
                  </div>
                </div>

                {/* 5. Optimized Code (Read-Only Editor) */}
                <div className="result-section">
                  <h3><CheckCircle2 size={18} /> Optimized Code</h3>
                  <div style={{ height: '300px', border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden', marginTop: '10px' }}>
                    <Editor
                      height="100%"
                      defaultLanguage="javascript"
                      theme={editorTheme}
                      value={reviewResult.optimized_code}
                      options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13, padding: { top: 10 } }}
                    />
                  </div>
                </div>

                {/* 6. Key Improvements List */}
                <div className="result-section">
                  <h3><ListChecks size={18} /> Suggested Improvements</h3>
                  <ul className="improvement-list">
                    {reviewResult.improvements?.map((imp, idx) => (
                      <li key={idx}>{imp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CodeEditor;