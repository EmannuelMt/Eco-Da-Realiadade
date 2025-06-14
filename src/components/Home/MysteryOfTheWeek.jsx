import { Link } from 'react-router-dom'
import './MysteryOfTheWeek.css'

export default function MysteryOfTheWeek() {
  return (
    <section className="mystery-section">
      <h2 className="section-title">🕵️‍♂️ Mistério da Semana</h2>
      
      <div className="mystery-card">
        <div className="mystery-header">
          <span className="mystery-date">Descoberto em: 15/06/2023</span>
          <h3>O Enigma do Relógio Parado</h3>
        </div>
        
        <p className="mystery-description">
          Um antigo relógio de parede que parou exatamente à meia-noite e agora 
          parece afetar a percepção de tempo de quem o observa...
        </p>
        
        <Link to="/enigmas/42" className="cta-button">
          Tentar Resolver
        </Link>
      </div>
    </section>
  )
}