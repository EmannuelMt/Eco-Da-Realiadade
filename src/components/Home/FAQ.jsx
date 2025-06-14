import { motion } from 'framer-motion'
import { 
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaDiceD20,
  FaUserShield,
  FaExchangeAlt,
  FaPuzzlePiece
} from 'react-icons/fa'
import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    {
      question: "Como criar uma campanha?",
      answer: "Basta acessar seu painel como Mestre e clicar em 'Nova Campanha'. Você pode configurar todos os detalhes da aventura, adicionar jogadores e definir as regras específicas.",
      icon: <FaDiceD20 />,
      color: "#8A2BE2"
    },
    {
      question: "O sistema é pago?",
      answer: "Não, o sistema é totalmente gratuito.",
      icon: <FaUserShield />,
      color: "#00CED1"
    },
    {
      question: "Como mudar de papel (Mestre/Jogador)?",
      answer: "Nas configurações do seu perfil, você pode alternar entre os papéis. Como Mestre, você terá acesso ao painel de criação; como Jogador, verá as campanhas disponíveis.",
      icon: <FaExchangeAlt />,
      color: "#FF6B6B"
    },
    {
      question: "Como resolver enigmas?",
      answer: "Na seção de Enigmas, escolha um desafio, analise as pistas e envie sua solução. O mestre da campanha avaliará sua resposta. Enigmas resolvidos dão pontos de experiência!",
      icon: <FaPuzzlePiece />,
      color: "#FFA500"
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
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.1]
      }
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

  const answerVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      marginTop: 0
    },
    open: { 
      height: 'auto',
      opacity: 1,
      marginTop: '1.5rem',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section className="knowledge-base" id="support">
      <div className="section-container">
        <div className="section-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">
              Base de Conhecimento
            </h2>
            <p className="section-subtitle">
              Encontre respostas para as dúvidas mais comuns sobre o sistema
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="faq-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {questions.map((item, index) => (
            <motion.article 
              key={index}
              className={`knowledge-card ${activeIndex === index ? 'active' : ''}`}
              variants={itemVariants}
              style={{ '--accent-color': item.color }}
            >
              <header 
                className="card-question"
                onClick={() => toggleFAQ(index)}
              >
                <div className="question-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.question}</h3>
                <motion.div 
                  className="toggle-icon"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.div>
              </header>
              
              <motion.div
                className="card-answer"
                initial="closed"
                animate={activeIndex === index ? "open" : "closed"}
                variants={answerVariants}
              >
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
              
              <div className="card-accent"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}