import React, { useEffect, useState } from 'react'

export default function SaveName() {
  const [name, setName] = useState(() => window.localStorage.getItem('name') || '')
  useEffect(() => { window.localStorage.setItem('name', name) }, [name])
  return (
    <div style={{maxWidth:360}}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{padding:8, width:'100%'}} />
      <div style={{marginTop:8, color:'#444'}}>Saved name: <strong>{name || '—'}</strong></div>
    </div>
  )
}