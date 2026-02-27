import { useState } from 'react'

const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button 
          className="copy-button" 
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="code-content">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
