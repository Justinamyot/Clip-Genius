'use client';

import { useState } from 'react';

export default function Home() {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setStatus('Generating clips...');

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link }),
    });

    const data = await res.json();
    setLoading(false);
    setStatus(data.message);
  };

  return (
    <main style={{ padding: 50 }}>
      <h1>ClipGenius</h1>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste YouTube link here"
        style={{ width: '300px', padding: 10 }}
      />
      <button onClick={handleSubmit} disabled={loading} style={{ marginLeft: 10 }}>
        Generate
      </button>
      <p>{status}</p>
    </main>
  );
}
