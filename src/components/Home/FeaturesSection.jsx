import { motion } from 'framer-motion'
import { 
  FaCrown,
  FaUserShield,
  FaDice,
  FaBookDead,
  FaScroll,
  FaMusic,
  FaMapMarkedAlt,
  FaUserEdit,
  FaFileExport,
  FaUsers,
  FaCalendarCheck,
  FaBook,
  FaHistory,
  FaBoxOpen
} from 'react-icons/fa'
import { GiSpellBook, GiTreasureMap } from 'react-icons/gi'
import './FeaturesSection.css'

const features = {
  master: [
    { icon: <FaCrown />, title: "Criar Campanhas", description: "Crie campanhas e spin-offs completos" },
    { icon: <FaUserShield />, title: "Gerenciar NPCs", description: "Controle todas as entidades e monstros" },
    { icon: <FaDice />, title: "Painel de Sessão", description: "Ferramentas integradas para mestrar" },
    { icon: <GiSpellBook />, title: "Criação de Entidades", description: "Designer exclusivo para criaturas" },
    { icon: <FaUserEdit />, title: "Editar Fichas", description: "Ajuste fichas de jogadores em tempo real" },
    { icon: <FaFileExport />, title: "Exportar Relatórios", description: "Gere logs completos das sessões" }
  ],
  player: [
    { icon: <FaBookDead />, title: "Criar Fichas", description: "Editor completo de personagens" },
    { icon: <FaUsers />, title: "Participar de Sessões", description: "Entre via convite ou código" },
    { icon: <FaBook />, title: "Diário Pessoal", description: "Anotações privadas do personagem" },
    { icon: <FaMusic />, title: "Trilha Sonora", description: "Sincronizada com a campanha" },
    { icon: <FaHistory />, title: "Histórico de Rolagens", description: "Registro completo de todas as jogadas" },
    { icon: <FaBoxOpen />, title: "Inventário", description: "Visualização 3D dos itens" }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "backOut"
    }
  }
}

export default function FeaturesSection() {
  return (
    <section className="features-section" id="recursos">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recursos Exclusivos
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ferramentas poderosas para mestres e jogadores
        </motion.p>
      </div>

      <div className="features-container">
        {/* Recursos para Mestres */}
        <motion.div 
          className="features-card master-features"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="features-header">
            <div className="role-icon">
              <FaCrown />
            </div>
            <h3>Para Mestres</h3>
            <div className="role-badge">Poder Absoluto</div>
          </div>
          
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.master.map((feature, index) => (
              <motion.li 
                key={`master-${index}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Recursos para Jogadores */}
        <motion.div 
          className="features-card player-features"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="features-header">
            <div className="role-icon">
              <FaUserShield />
            </div>
            <h3>Para Jogadores</h3>
            <div className="role-badge">Imersão Total</div>
          </div>
          
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.player.map((feature, index) => (
              <motion.li 
                key={`player-${index}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}