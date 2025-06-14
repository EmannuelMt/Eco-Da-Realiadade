import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa'
import './Newsletter.css'

export default function Newsletter() {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <section className="newsletter-showcase">
      <div className="section-container">
        <motion.div 
          className="newsletter-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="newsletter-icon" variants={itemVariants}>
            <FaEnvelope />
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            Receba Novidades
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Assine nossa newsletter e fique por dentro das atualizações e conteúdos exclusivos
          </motion.p>
          
          <motion.form 
            className="newsletter-form"
            variants={itemVariants}
          >
            <div className="input-container">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                required
              />
              <div className="input-decoration"></div>
            </div>
            
            <motion.button 
              type="submit" 
              className="cta-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Quero Receber Novidades!</span>
              <FaPaperPlane className="button-icon" />
            </motion.button>
          </motion.form>
          
          <div className="newsletter-decoration"></div>
        </motion.div>
      </div>
    </section>
  )
}