import { motion } from 'framer-motion'
import { GiLaurelsTrophy, GiSpellBook, GiCrystalBall, GiPuzzle } from 'react-icons/gi'
import { FaCrown, FaScroll, FaUserAlt } from 'react-icons/fa'
import './HallOfFame.css'

export default function HallOfFame() {
  const rankings = {
    activePlayers: [
      { name: "Lucas", score: 42, avatar: "👨‍💻" },
      { name: "Mariana", score: 38, avatar: "👩‍🎨" },
      { name: "Pedro", score: 35, avatar: "🧙‍♂️" }
    ],
    masters: [
      { name: "Carlos", campaigns: 7, avatar: "🧙‍♂️" },
      { name: "Ana", campaigns: 5, avatar: "🧙‍♀️" },
      { name: "Ricardo", campaigns: 4, avatar: "🧝‍♂️" }
    ],
    enigmaSolvers: [
      { name: "Fernanda", solved: 15, avatar: "🦉" },
      { name: "Rafael", solved: 12, avatar: "🦊" },
      { name: "Juliana", solved: 10, avatar: "🐉" }
    ]
  }

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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <motion.section 
      className="home-section hall-of-fame"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="section-header">
        <GiLaurelsTrophy className="section-icon" />
        <motion.h2 className="section-title">
          Hall da Fama
        </motion.h2>
        <motion.p className="section-subtitle">
          Destaques da comunidade Eco da Realidade
        </motion.p>
      </div>
      
      <motion.div className="grid-container" variants={containerVariants}>
        {/* Jogadores Mais Ativos */}
        <motion.div 
          className="ranking-card"
          variants={cardVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px rgba(106, 44, 173, 0.4)"
          }}
        >
          <div className="card-header">
            <FaUserAlt className="card-icon" />
            <h3>Jogadores Mais Ativos</h3>
          </div>
          <ul>
            {rankings.activePlayers.map((player, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="rank-badge">{index + 1}</div>
                <span className="player-avatar">{player.avatar}</span>
                <span className="name">{player.name}</span>
                <span className="score">{player.score} <span>sessões</span></span>
                {index === 0 && <FaCrown className="crown-icon" />}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mestres com Mais Campanhas */}
        <motion.div 
          className="ranking-card"
          variants={cardVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px rgba(233, 69, 96, 0.4)"
          }}
        >
          <div className="card-header">
            <GiSpellBook className="card-icon" />
            <h3>Mestres com Mais Campanhas</h3>
          </div>
          <ul>
            {rankings.masters.map((master, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="rank-badge">{index + 1}</div>
                <span className="player-avatar">{master.avatar}</span>
                <span className="name">{master.name}</span>
                <span className="score">{master.campaigns} <span>campanhas</span></span>
                {index === 0 && <FaScroll className="scroll-icon" />}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resolvedores de Enigmas */}
        <motion.div 
          className="ranking-card"
          variants={cardVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px rgba(27, 188, 155, 0.4)"
          }}
        >
          <div className="card-header">
            <GiPuzzle className="card-icon" />
            <h3>Resolvedores de Enigmas</h3>
          </div>
          <ul>
            {rankings.enigmaSolvers.map((solver, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="rank-badge">{index + 1}</div>
                <span className="player-avatar">{solver.avatar}</span>
                <span className="name">{solver.name}</span>
                <span className="score">{solver.solved} <span>enigmas</span></span>
                {index === 0 && <GiCrystalBall className="crystal-icon" />}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}