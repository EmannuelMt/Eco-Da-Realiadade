import { motion } from 'framer-motion'
import { GiSpiralArrow, GiAbstract024 } from 'react-icons/gi'
import './Partners.css'

export default function Partners() {
  const partners = [
    { 
      name: "MongoDB", 
      logo: "/partners/mongodb.svg",
      description: "Banco de dados NoSQL para armazenamento flexível",
      color: "#13AA52",
      icon: <GiSpiralArrow />
    },
    { 
      name: "Google OAuth", 
      logo: "/partners/google.svg",
      description: "Autenticação segura com contas Google",
      color: "#4285F4",
      icon: <GiSpiralArrow />
    },
    { 
      name: "Spotify", 
      logo: "/partners/spotify.svg",
      description: "Integração de playlists para ambientação",
      color: "#1DB954",
      icon: <GiSpiralArrow />
    },
    { 
      name: "Vercel", 
      logo: "/partners/vercel.svg",
      description: "Hospedagem e deploy contínuo",
      color: "#000000",
      icon: <GiSpiralArrow />
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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
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
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.1]
      }
    }
  }

  return (
    <section className="partners-showcase">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="header-icon">
            <GiSpiralArrow />
          </div>
          <h2 className="section-title">
            Parceiros & Integrações
          </h2>
          <p className="section-subtitle">
            Tecnologias que tornam o Eco da Realidade possível
          </p>
        </motion.div>
        
        <motion.div 
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.article
              key={index}
              className="partner-card"
              variants={itemVariants}
              whileHover="hover"
              style={{ '--partner-color': partner.color }}
            >
              <div className="card-decoration"></div>
              
              <div className="logo-container">
                <motion.div
                  className="logo-background"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {partner.icon}
                </motion.div>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="partner-logo"
                  loading="lazy"
                />
                <div className="logo-glow"></div>
              </div>
              
              <div className="partner-info">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
              
              <GiAbstract024 className="abstract-decoration" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}