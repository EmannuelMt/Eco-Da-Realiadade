import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App