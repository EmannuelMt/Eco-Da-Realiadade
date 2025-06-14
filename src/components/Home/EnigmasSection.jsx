import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaSearch,
  FaPuzzlePiece,
  FaArrowRight,
  FaLock,
  FaEye,
  FaGhost
} from 'react-icons/fa'
import './EnigmasSection.css'

export default function EnigmasSection() {
  const enigmas = [
    {
      id: 47,
      title: "O Caso do Espelho Quebrado",
      description: "Reflexos que não correspondem à realidade... o que está do outro lado?",
      difficulty: "Difícil",
      category: "Objetos Amaldiçoados",
      solved: false,
      accentColor: "#8A2BE2"
    },
    {
      id: 48,
      title: "A Melodia do Outro Lado",
      description: "Uma música que ecoa de lugares vazios. Quem ou o que está cantando?",
      difficulty: "Médio",
      category: "Manifestações Sonoras",
      solved: true,
      accentColor: "#00CED1"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  return (
    <section className="enigmas-container" id="mysteries">
      <div className="enigmas-content">
        <div className="section-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">
              Arquivos Paranormais
            </h2>
            <p className="section-subtitle">
              "Novos enigmas foram descobertos. Está pronto para investigar?"
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Link to="/enigmas" className="archive-link">
              Acessar Arquivo Completo <FaArrowRight className="link-icon" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="enigmas-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {enigmas.map((enigma) => (
            <motion.article 
              key={enigma.id}
              className="mystery-card"
              variants={cardVariants}
              whileHover="hover"
              style={{ '--accent-color': enigma.accentColor }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <FaPuzzlePiece />
                  <div className="enigma-number">#{enigma.id}</div>
                </div>
                
                <div className="card-meta">
                  <span className="difficulty-badge" style={{ backgroundColor: `${enigma.accentColor}20`, color: enigma.accentColor }}>
                    {enigma.difficulty}
                  </span>
                  <span className="category-tag">{enigma.category}</span>
                </div>
                
                <motion.div 
                  className={`status-badge ${enigma.solved ? 'solved' : 'unsolved'}`}
                  variants={badgeVariants}
                >
                  {enigma.solved ? (
                    <>
                      <FaEye /> Resolvido
                    </>
                  ) : (
                    <>
                      <FaLock /> Pendente
                    </>
                  )}
                </motion.div>
              </div>
              
              <div className="card-body">
                <h3 className="mystery-title">{enigma.title}</h3>
                <p className="mystery-description">{enigma.description}</p>
              </div>
              
              <div className="card-footer">
                <Link to={`/enigmas/${enigma.id}`} className="investigate-link">
                  <motion.span 
                    className="link-text"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Investigar Caso
                  </motion.span>
                  <FaSearch className="link-icon" />
                </Link>
              </div>
              
              <div className="card-accent"></div>
              <div className="card-decoration">
                <FaGhost className="ghost-icon" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="cta-container"
        >
          <Link to="/enigmas" className="primary-cta">
            Explorar Todos os Enigmas <FaArrowRight className="cta-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}