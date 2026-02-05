import React, { useState } from 'react'

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{padding: '6px 10px', borderRadius: 6}}>
      {children}
    </button>
  )
}

export default function ButtonDemo() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex', gap: 12, alignItems: 'center', position: 'relative'}}>
      {/* visible interactive badge for children */}
      <span aria-hidden style={{background: '#e6f4ff', color: '#0366d6', padding: '2px 8px', borderRadius: 999, fontSize: 12}}>Interactive</span>

      <Button
        onClick={() => setCount(c => c + 1)}
        aria-describedby="button-demo-instructions"
      >
        Click me
      </Button>

      <div style={{fontSize: 14}}>
        Clicks: <strong>{count}</strong>
      </div>

      <div style={{marginLeft: 'auto', fontSize: 13, color: '#666'}}>
        Props demo: <code>children</code>
      </div>

      {/* screen-reader only instruction */}
      <div id="button-demo-instructions" style={{position: 'absolute', left: -10000, width: 1, height: 1, overflow: 'hidden'}}>
        This is an interactive button — press Enter or Space to activate. The demo announces the number of clicks.
      </div>

      {/* live region for SR users so clicks are announced */}
      <div aria-live="polite" style={{position: 'absolute', left: -10000, width: 1, height: 1, overflow: 'hidden'}}>
        {count > 0 ? `${count} clicks` : ''}
      </div>
    </div>
  )
}
