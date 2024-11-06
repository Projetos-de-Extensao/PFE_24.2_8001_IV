import React, { useState } from 'react';
import '../index.css';  // Certifique-se de que o caminho está correto
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();  // Hook para navegação

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: '' });
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setErrors({ ...errors, confirmPassword: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formValid = true;

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'O campo de e-mail é obrigatório' }));
      formValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'O campo de senha é obrigatório' }));
      formValid = false;
    } else if (password !== confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'As senhas não coincidem' }));
      formValid = false;
    }

    if (formValid) {
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/home');  // Redireciona para a página Home
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme sua senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="form-input"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="submit-button">Criar conta</button>
      </form>
    </div>
  );
};

export default Cadastro;
