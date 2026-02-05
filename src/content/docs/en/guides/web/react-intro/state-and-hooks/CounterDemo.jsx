import React, { useState } from 'react'

export default function CounterDemo() {
  const [count, setCount] = useState(0)
  return (
    <div style={{padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '300px'}}>
      <p style={{margin: '0 0 12px 0'}}>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)} style={{padding: '8px 16px'}}>
        Increment
      </button>
      <div style={{marginTop: 12, fontSize: 13, color: '#666', fontStyle: 'italic'}}>
        Try it! Click the button and watch the number change instantly!
      </div>
    </div>
  )
}
