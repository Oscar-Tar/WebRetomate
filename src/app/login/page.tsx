'use client';

import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function InicioPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Header />
      <main
        style={{
          padding: '2rem',
          textAlign: 'center',
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '300px',
            background: '#f4f4f4',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.8rem',
              backgroundColor: '#222',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Iniciar sesión
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
