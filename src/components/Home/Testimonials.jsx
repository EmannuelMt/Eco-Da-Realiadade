import { motion } from 'framer-motion'
import { GiQuillInk, GiScrollQuill, GiSpellBook } from 'react-icons/gi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "O sistema revolucionou minhas sessões como mestre! A integração de ferramentas é incrível.",
      author: "Carlos, Mestre há 3 anos",
      campaign: "O Segredo de Silent Hill",
      icon: <GiSpellBook />,
      accentColor: "#8A2BE2"
    },
    {
      quote: "Nunca foi tão fácil criar e gerenciar personagens complexos. A experiência é totalmente imersiva.",
      author: "Ana, Jogadora",
      campaign: "Crônicas do Outro Lado",
      icon: <GiScrollQuill />,
      accentColor: "#E94560"
    },
    {
      quote: "Os enigmas integrados tornam as sessões muito mais dinâmicas e envolventes para todos os jogadores.",
      author: "Ricardo, Mestre",
      campaign: "A Ordem em São Paulo",
      icon: <GiQuillInk />,
      accentColor: "#1DB954"
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
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
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
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
        ease: "easeOut"
      }
    }
  }

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.2
      }
    },
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  }

  return (
    <section className="testimonials-showcase">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <motion.div 
            className="header-icon"
            variants={iconVariants}
          >
            <GiQuillInk />
          </motion.div>
          <h2 className="section-title">
            Depoimentos
          </h2>
          <p className="section-subtitle">
            Veja o que a comunidade está dizendo sobre suas experiências
          </p>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="testimonial-card"
              variants={cardVariants}
              whileHover="hover"
              style={{ '--accent-color': testimonial.accentColor }}
            >
              <div className="quote-decoration">
                <FaQuoteLeft className="quote-icon start" />
                <FaQuoteRight className="quote-icon end" />
              </div>
              
              <motion.div
                className="testimonial-icon-container"
                variants={iconVariants}
              >
                {testimonial.icon}
              </motion.div>
              
              <motion.blockquote 
                className="testimonial-quote"
                variants={quoteVariants}
              >
                {testimonial.quote}
              </motion.blockquote>
              
              <div className="testimonial-author">
                <motion.strong variants={quoteVariants}>
                  {testimonial.author}
                </motion.strong>
                <motion.span variants={quoteVariants}>
                  {testimonial.campaign}
                </motion.span>
              </div>
              
              <div className="testimonial-accent"></div>
              <div className="testimonial-glow"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}