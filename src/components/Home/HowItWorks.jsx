import { motion } from 'framer-motion'
import { 
  FaUserPlus,
  FaUserTie,
  FaDoorOpen,
  FaSkull,
  FaDiceD20,
  FaBookDead
} from 'react-icons/fa'
import { GiSpellBook, GiStonePath } from 'react-icons/gi'
import './HowItWorks.css'

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Crie Sua Conta",
    description: "Registro rápido e gratuito para começar sua jornada",
    color: "#b56aff"
  },
  {
    icon: <FaUserTie />,
    title: "Escolha Seu Papel",
    description: "Mestre ou Jogador - cada um com ferramentas exclusivas",
    color: "#e94560"
  },
  {
    icon: <GiStonePath />,
    title: "Selecione Seu Caminho",
    description: "Crie campanhas ou entre em aventuras existentes",
    color: "#6a2cad"
  },
  {
    icon: <FaDoorOpen />,
    title: "Entre no Outro Lado",
    description: "Acesse o universo paranormal com seu grupo",
    color: "#4a9cc9"
  },
  {
    icon: <FaDiceD20 />,
    title: "Viva a Aventura",
    description: "Resolva enigmas, enfrente entidades e descubra segredos",
    color: "#f5a623"
  },
  {
    icon: <FaBookDead />,
    title: "Documente Sua História",
    description: "Registre cada descoberta em seu grimório pessoal",
    color: "#2ecc71"
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
}

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Como Explorar o Outro Lado
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Em poucos passos você estará imerso em histórias paranormais cheias de mistério
        </motion.p>
      </div>

      <motion.div 
        className="steps-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="timeline-line"></div>
        
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className={`step-card ${index % 2 === 0 ? 'left' : 'right'}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            custom={index}
          >
            <div 
              className="step-icon-container"
              style={{ 
                backgroundColor: `${step.color}20`,
                borderColor: step.color
              }}
            >
              <div 
                className="step-icon"
                style={{ color: step.color }}
              >
                {step.icon}
              </div>
            </div>
            
            <div className="step-content">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}

        <div className="final-step">
          <div className="final-icon">
            <FaSkull />
          </div>
          <p>Sobreviva ao Horror</p>
        </div>
      </motion.div>
    </section>
  )
}