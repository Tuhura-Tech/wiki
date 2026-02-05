import React, { useState } from 'react'

export default function ColorBox() {
  const [on, setOn] = useState(false)
  return (
    <div style={{ padding: '16px', border: '1px solid var(--sl-color-gray-5)', borderRadius: '8px', maxWidth: '200px' }}>
      <div style={{
        width: 120,
        height: 80,
        background: on ? '#16a34a' : '#64748b',
        transition: 'background-color 300ms ease',
        borderRadius: 8,
        marginBottom: 12,
        border: '2px solid var(--sl-color-gray-6)'
      }} />
      <button 
        onClick={() => setOn(o => !o)} 
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid var(--sl-color-gray-5)',
          backgroundColor: 'var(--sl-color-bg)',
          color: 'var(--sl-color-text)',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}
      >
        {on ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  )
}