import { motion } from 'framer-motion'
import { GiScrollQuill, GiSpellBook, GiPodiumWinner } from 'react-icons/gi'
import { FaSpotify } from 'react-icons/fa'
import './NewsUpdates.css'

export default function NewsUpdates() {
  const updates = [
    {
      date: "15/06/2023",
      title: "Nova ferramenta de criação de NPCs",
      description: "MasterEntityCreator agora com mais opções de personalização",
      icon: <GiScrollQuill className="update-icon" />,
      color: "#6a2cad"
    },
    {
      date: "10/06/2023",
      title: "Competição de Enigmas",
      description: "Participe e concorra a prêmios especiais",
      icon: <GiPodiumWinner className="update-icon" />,
      color: "#e94560"
    },
    {
      date: "05/06/2023",
      title: "Integração com Spotify",
      description: "Agora você pode sincronizar playlists diretamente",
      icon: <FaSpotify className="update-icon" />,
      color: "#1DB954"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="home-section news-updates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="section-header">
        <GiSpellBook className="section-icon" />
        <motion.h2 className="section-title">
          Eventos e Atualizações
        </motion.h2>
        <motion.p className="section-subtitle">
          Fique por dentro das novidades do Eco da Realidade
        </motion.p>
      </div>
      
      <motion.div className="updates-container" variants={containerVariants}>
        {updates.map((update, index) => (
          <motion.div 
            key={index}
            className="update-card"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: `0 10px 25px ${update.color}40`
            }}
            style={{ '--card-accent': update.color }}
          >
            <div className="update-date">{update.date}</div>
            <div className="update-icon-container">
              {update.icon}
            </div>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
            <div className="card-glow" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}