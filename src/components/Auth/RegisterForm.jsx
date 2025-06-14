import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserAlt, FaEnvelope, FaLock, FaScroll, FaHatWizard, FaMagic } from 'react-icons/fa';
import { GiSpellBook, GiStonePath } from 'react-icons/gi';
import './Auth.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Um nome de mago é obrigatório';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Pergaminho de e-mail inválido';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'O feitiço precisa de pelo menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Os feitiços não coincidem';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulação de API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registration successful:', formData);
      navigate('/login'); // Redireciona para login após registro
    } catch (err) {
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <GiStonePath className="path-icon" />
        <div className="magic-dust"></div>
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
              Criar Grimório
            </motion.h1>
            <motion.p 
              className="auth-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Registre-se para começar sua jornada mágica
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-field">
              <label className="form-label">
                <span className="label-text">
                  <FaUserAlt className="label-icon" />
                  Nome de Mago
                </span>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className={`form-input ${errors.username ? 'error' : ''}`}
                    autoComplete="username"
                  />
                </div>
                {errors.username && (
                  <motion.span 
                    className="field-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.username}
                  </motion.span>
                )}
              </label>
            </div>

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
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <motion.span 
                    className="field-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.span>
                )}
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
                    type={showPasswords.password ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  <button 
                    type="button"
                    className={`password-toggle ${showPasswords.password ? 'visible' : ''}`}
                    onClick={() => setShowPasswords(prev => ({ ...prev, password: !prev.password }))}
                    aria-label={showPasswords.password ? "Ocultar senha" : "Mostrar senha"}
                  >
                    <FaScroll />
                  </button>
                </div>
                {errors.password && (
                  <motion.span 
                    className="field-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.password}
                  </motion.span>
                )}
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">
                <span className="label-text">
                  <FaLock className="label-icon" />
                  Confirmar Feitiço
                </span>
                <div className="input-wrapper">
                  <input
                    type={showPasswords.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  <button 
                    type="button"
                    className={`password-toggle ${showPasswords.confirmPassword ? 'visible' : ''}`}
                    onClick={() => setShowPasswords(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}
                    aria-label={showPasswords.confirmPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    <FaScroll />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <motion.span 
                    className="field-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.confirmPassword}
                  </motion.span>
                )}
              </label>
            </div>

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
                  <FaHatWizard className="btn-icon" />
                  Concluir Registro
                </>
              )}
            </motion.button>

            <div className="auth-footer">
              <p>
                Já possui um grimório?{' '}
                <Link to="/login" className="auth-link">
                  <FaMagic className="link-icon" />
                  Faça login
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RegisterForm;