import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaBook,
  FaUserTie,
  FaPuzzlePiece,
  FaArrowRight,
  FaCalendarAlt
} from 'react-icons/fa'
import './BlogPreview.css'

export default function BlogPreview() {
  const articles = [
    {
      id: 1,
      title: "10 Dicas para Mestres Iniciantes",
      excerpt: "Aprenda técnicas para melhorar suas narrativas e sessões com lições de mestres experientes.",
      category: "Mestrado",
      date: "12/06/2023",
      icon: <FaUserTie />,
      color: "#b56aff"
    },
    {
      id: 2,
      title: "Criando Personagens Memoráveis",
      excerpt: "Desenvolva personagens complexos que cativam seus jogadores e enriquecem a narrativa.",
      category: "Personagens",
      date: "05/06/2023",
      icon: <FaBook />,
      color: "#e94560"
    },
    {
      id: 3,
      title: "O Impacto dos Enigmas na Narrativa",
      excerpt: "Como integrar enigmas de forma orgânica para aprofundar o mistério e engajar os jogadores.",
      category: "Narrativa",
      date: "28/05/2023",
      icon: <FaPuzzlePiece />,
      color: "#00c9a7"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
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

  return (
    <section className="blog-section" id="insights">
      <div className="section-container">
        <div className="section-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">
              Insights & Atualizações
            </h2>
            <p className="section-subtitle">
              Artigos especializados para elevar suas experiências de RPG paranormal
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Link to="/blog" className="cta-link">
              Explorar Conteúdo <FaArrowRight className="cta-icon" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="articles-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              className="insight-card"
              variants={itemVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="card-header">
                <div className="card-icon" style={{ backgroundColor: `${article.color}20`, color: article.color }}>
                  {article.icon}
                </div>
                <div className="card-meta">
                  <span className="category-badge" style={{ color: article.color }}>
                    {article.category}
                  </span>
                  <span className="publication-date">
                    <FaCalendarAlt className="date-icon" />
                    {article.date}
                  </span>
                </div>
              </div>
              
              <h3 className="card-title">{article.title}</h3>
              <p className="card-excerpt">{article.excerpt}</p>
              
              <Link to={`/blog/${article.id}`} className="read-link">
                <motion.span 
                  className="link-text"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Ler análise completa
                </motion.span>
                <FaArrowRight className="link-icon" />
              </Link>
              
              <div className="card-accent" style={{ backgroundColor: article.color }} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}