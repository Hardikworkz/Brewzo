import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DemoHeader from './components/navigation/DemoHeader'
import Home from './Pages/Home'
import Events from './Pages/Events'

function App() {
  return (
    <main className="app-shell">
      <DemoHeader />
      <div className="app-view">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
