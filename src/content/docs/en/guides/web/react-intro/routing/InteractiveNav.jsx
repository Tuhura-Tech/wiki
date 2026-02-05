import React, { useState } from 'react'

export default function InteractiveNav() {
  const [route, setRoute] = useState('/')

  // Simple Home and About components matching the code example
  function Home() {
    return <div>Home Page Content</div>
  }

  function About() {
    return <div>About Page Content</div>
  }

  return (
    <div style={{padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px'}}>
      <nav style={{marginBottom: '16px'}}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setRoute('/') }}
          style={{marginRight: '12px', color: '#0066cc', textDecoration: 'underline', cursor: 'pointer'}}
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setRoute('/about') }}
          style={{color: '#0066cc', textDecoration: 'underline', cursor: 'pointer'}}
        >
          About
        </a>
      </nav>

      {route === '/' ? <Home /> : <About />}

      <div style={{marginTop: 16, paddingTop: 16, borderTop: '1px solid #eee', fontSize: 13, color: '#666', fontStyle: 'italic'}}>
        Interactive demo! Click the links and watch the page change like magic!
      </div>
    </div>
  )
}
