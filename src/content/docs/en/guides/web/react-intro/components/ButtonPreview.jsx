import React from 'react'

// A tiny interactive-only button for the "Function Components" example.
// It is interactive (responds to clicks/keyboard) but does not display a click count.
export default function ButtonPreview() {
  return (
    <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
      <button
        onClick={(e) => e.currentTarget.blur()}
        aria-label="Example action button"
        style={{padding: '6px 10px', borderRadius: 6}}
      >
        Click me
      </button>
      <span style={{fontSize:13, color:'#666'}}>This button is interactive — it doesn't show the number of clicks.</span>
    </div>
  )
}
