import { Link } from 'react-router-dom'
import { 
  FaSkull, 
  FaBookDead, 
  FaGhost, 
  FaScroll,
  FaArrowRight
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import './HeroBanner.css'

// Imagem do Imgur - Exemplo com tema Ordem Paranormal
const HERO_IMAGE_URL = "https://imgur.com/a/94d3fHp.jpg"

export default function HeroBanner() {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        {/* Título com animação */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-title-line">Desvende os <span className="text-accent">Segredos</span></span>
          <span className="hero-title-line">do <span className="text-accent">Outro Lado</span></span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-subtitle"
        >
          O sistema definitivo para suas campanhas paranormais. Controle sessões, 
          crie entidades, resolva enigmas e sobreviva ao horror.
        </motion.p>

        {/* Recursos com ícones */}
        <motion.div 
          className="hero-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { icon: <FaSkull />, text: "Criação de Entidades" },
            { icon: <FaBookDead />, text: "Grimório Completo" },
            { icon: <FaGhost />, text: "NPCs Paranormais" },
            { icon: <FaScroll />, text: "Enigmas Interativos" }
          ].map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <span>{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Botão CTA com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link to="/register" className="hero-btn">
            Iniciar Jornada <FaArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>

      {/* Efeito de selo */}
      <div className="hero-seal">
        <div className="seal-inner">
          <span>ECO </span>
            <span>DA</span>
          <span>REALIDADE</span>
        </div>
      </div>
    </section>
  )
}