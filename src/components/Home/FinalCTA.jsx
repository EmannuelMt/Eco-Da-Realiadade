import { Link } from 'react-router-dom'
import { GiSpellBook, GiCrystalBall, GiScrollQuill, GiCube, GiStonePath } from 'react-icons/gi'
import { FaDiscord, FaHeadset, FaHome, FaBookDead, FaPuzzlePiece, FaRegCopyright, FaUsers, FaStore, FaDiceD20 } from 'react-icons/fa'
import { RiCustomerService2Line, RiTeamLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { SiStorybook } from 'react-icons/si'
import './FinalCTA.css'

export default function FinalCTA() {
  const currentYear = new Date().getFullYear()
  
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * i,
        duration: 0.8
      }
    })
  }

  // Footer link columns data
  const footerColumns = [
    {
      title: "Navegação",
      icon: <GiCube className="column-icon" />,
      links: [
        { to: "/", text: "Início", icon: <FaHome /> },
        { to: "/campaigns", text: "Campanhas", icon: <FaBookDead /> },
        { to: "/grimoire", text: "Grimório", icon: <GiSpellBook /> },
        { to: "/enigmas", text: "Enigmas", icon: <FaPuzzlePiece /> }
      ]
    },
    {
      title: "Recursos",
      icon: <GiScrollQuill className="column-icon" />,
      links: [
        { to: "/entities", text: "Entidades", icon: <GiCrystalBall /> },
        { to: "/rules", text: "Regras", icon: <GiScrollQuill /> },
        { to: "/characters", text: "Personagens", icon: <FaUsers /> },
        { to: "/market", text: "Mercado", icon: <FaStore /> }
      ]
    },
    {
      title: "Comunidade",
      icon: <RiTeamLine className="column-icon" />,
      links: [
        { to: "/guides", text: "Guias", icon: <SiStorybook /> },
        { to: "/tools", text: "Ferramentas", icon: <FaDiceD20 /> },
        { to: "/lore", text: "Lore", icon: <GiStonePath /> },
        { to: "/forum", text: "Fórum", icon: <FaUsers /> }
      ]
    },
    {
      title: "Suporte",
      icon: <RiCustomerService2Line className="column-icon" />,
      links: [
        { to: "/support", text: "Central de Ajuda", icon: <FaHeadset /> },
        { to: "/contact", text: "Contato", icon: <FaHeadset /> },
        { to: "/faq", text: "FAQ", icon: <FaHeadset /> },
        { to: "/terms", text: "Termos", icon: <FaHeadset /> }
      ]
    }
  ]

  return (
    <>
     
      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="footer-wave"></div>
        
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="logo-wrapper">
              <GiCrystalBall className="footer-logo" />
              <span className="logo-glow"></span>
              <div className="logo-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            </div>
            <h3>Outro Lado</h3>
            <p className="footer-slogan">Onde histórias ganham vida</p>
            
            <div className="social-links">
              <motion.a 
                href="https://discord.gg/seulink" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="social-icon discord"
                aria-label="Discord"
              >
                <FaDiscord />
              </motion.a>
              {/* Additional social links would go here */}
            </div>
            
            <div className="newsletter-signup">
              <h4>Receba atualizações</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  aria-label="Insira seu e-mail para newsletter"
                  required
                />
                <button type="submit" className="newsletter-button">
                  <GiScrollQuill />
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          <div className="footer-links-grid">
            {footerColumns.map((column, index) => (
              <div className="links-column" key={index}>
                <h4 className="column-title">
                  {column.icon}
                  {column.title}
                </h4>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.to}>
                        {link.icon}
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="copyright">
            <FaRegCopyright /> {currentYear} Outro Lado RPG. Todos os direitos reservados.
          </div>
          <div className="legal-links">
            <Link to="/privacy">Privacidade</Link>
            <Link to="/terms">Termos</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/sitemap">Mapa do Site</Link>
          </div>
        </div>
        
        {/* Back to top button */}
        <motion.button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -5 }}
          aria-label="Voltar ao topo"
        >
          ↑
        </motion.button>
        
      </footer>
    </>
  )
}