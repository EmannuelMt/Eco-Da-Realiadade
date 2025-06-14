import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { 
  FaSkull,
  FaUsers,
  FaCalendarAlt,
  FaDiceD20,
  FaBookDead,
  FaArrowRight,
  FaUserAlt
} from 'react-icons/fa'
import { GiSpellBook, GiStonePath } from 'react-icons/gi'
import './FeaturedCampaigns.css'

const campaigns = [
  {
    id: 1,
    title: "O Segredo de Silent Hill",
    master: "Carlos Oliveira",
    players: 5,
    sessions: 12,
    nex: "65%",
    tags: ["Horror", "Mistério", "Sobrevivência"],
    color: "#8A2BE2",
    icon: <FaSkull />
  },
  {
    id: 2,
    title: "Crônicas do Outro Lado",
    master: "Ana Beatriz",
    players: 4,
    sessions: 8,
    nex: "40%",
    tags: ["Investigação", "Ocultismo", "Drama"],
    color: "#00CED1",
    icon: <FaBookDead />
  },
  {
    id: 3,
    title: "A Ordem em São Paulo",
    master: "Ricardo Silva",
    players: 6,
    sessions: 15,
    nex: "80%",
    tags: ["Ação", "Urban Fantasy", "Conspiração"],
    color: "#FF6B6B",
    icon: <GiStonePath />
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

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.98 },
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
    y: -10,
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)"
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

export default function FeaturedCampaigns() {
  return (
    <section className="campaigns-showcase" id="campaigns">
      <div className="section-container">
        <div className="section-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">
              Campanhas Premiadas
            </h2>
            <p className="section-subtitle">
              Explore aventuras paranormais que estão fazendo sucesso na comunidade
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="campaigns-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {campaigns.map((campaign) => (
            <motion.article 
              key={campaign.id}
              className="campaign-card"
              variants={itemVariants}
              whileHover="hover"
              style={{ '--accent-color': campaign.color }}
            >
              <div className="card-header">
                <div className="campaign-icon" style={{ backgroundColor: `${campaign.color}20`, color: campaign.color }}>
                  {campaign.icon}
                </div>
                <h3 className="campaign-title">{campaign.title}</h3>
                <div className="campaign-master">
                  <FaUserAlt className="master-icon" />
                  <span>{campaign.master}</span>
                </div>
              </div>
              
              <div className="card-tags">
                {campaign.tags.map((tag, index) => (
                  <span key={index} className="tag" style={{ borderColor: campaign.color }}>{tag}</span>
                ))}
              </div>
              
              <div className="card-stats">
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">{campaign.players}</span>
                    <span className="stat-label">Jogadores</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <FaCalendarAlt className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">{campaign.sessions}</span>
                    <span className="stat-label">Sessões</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <FaDiceD20 className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">{campaign.nex}</span>
                    <span className="stat-label">NEX</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="card-cta"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link to={`/campaigns/${campaign.id}`} className="cta-link">
                  <span>Explorar Detalhes</span>
                  <FaArrowRight className="arrow-icon" />
                </Link>
              </motion.div>
              
              <div className="card-accent"></div>
              <GiSpellBook className="card-decoration" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}