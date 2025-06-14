import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaSignInAlt, FaMagic } from 'react-icons/fa';
import { GiSpellBook, GiCastle } from 'react-icons/gi';
import './Auth.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: 'manoelmatos818@gmail.com',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulação de API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validação simples para demonstração
      if (formData.password.length < 6) {
        throw new Error('O feitiço deve ter pelo menos 6 caracteres');
      }
      
      console.log('Login successful:', formData);
      navigate('/dashboard'); // Redirecionamento após login
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <GiCastle className="castle-icon" />
        <div className="magic-orb"></div>
      </div>
      
      <AnimatePresence>
        <motion.div 
          className="auth-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="auth-header">
            <GiSpellBook className="header-icon" />
            <motion.h1 
              className="auth-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Acessar o Grimório
            </motion.h1>
            <motion.p 
              className="auth-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Insira suas credenciais mágicas
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-field">
              <label className="form-label">
                <span className="label-text">
                  <FaEnvelope className="label-icon" />
                  Pergaminho de E-mail
                </span>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    autoComplete="username"
                  />
                </div>
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">
                <span className="label-text">
                  <FaLock className="label-icon" />
                  Feitiço Secreto
                </span>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button 
                    type="button"
                    className={`password-toggle ${showPassword ? 'visible' : ''}`}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </label>
            </div>

            {error && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <FaSignInAlt className="btn-icon" />
                  Conjurar Entrada
                </>
              )}
            </motion.button>

            <div className="auth-footer">
              <p>
                Não possui um grimório?{' '}
                <Link to="/register" className="auth-link">
                  Registrar-se
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="auth-link">
                  <FaMagic className="link-icon" />
                  Esqueceu seu feitiço?
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;