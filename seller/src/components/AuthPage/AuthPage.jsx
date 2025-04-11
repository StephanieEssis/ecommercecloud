import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [view, setView] = useState('login'); // login | register | reset
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      alert('Connexion réussie');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error('Erreur de connexion:', err);
      alert(err.response?.data?.message || 'Erreur de connexion');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('Inscription réussie');
      setView('login');
    } catch (err) {
      console.error('Erreur d’inscription:', err);
      alert(err.response?.data?.message || 'Erreur d’inscription');
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/reset-password', {
        email: formData.email,
      });
      alert('Lien de réinitialisation envoyé');
      setView('login');
    } catch (err) {
      console.error('Erreur de réinitialisation:', err);
      alert(err.response?.data?.message || 'Erreur de réinitialisation');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setView('login')}>Connexion</button>
        <button onClick={() => setView('register')}>Inscription</button>
        <button onClick={() => setView('reset')}>Mot de passe oublié</button>
      </div>

      {view === 'login' && (
        <form onSubmit={handleLogin}>
          <h2>Connexion</h2>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
          <button type="submit">Se connecter</button>
        </form>
      )}

      {view === 'register' && (
        <form onSubmit={handleRegister}>
          <h2>Inscription</h2>
          <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
          <button type="submit">S’inscrire</button>
        </form>
      )}

      {view === 'reset' && (
        <form onSubmit={handleReset}>
          <h2>Réinitialiser le mot de passe</h2>
          <input type="email" name="email" placeholder="Votre email" onChange={handleChange} required />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
