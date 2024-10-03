import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './main.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Frens from './pages/frens';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="pgs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frens" element={<Frens />} />
        </Routes>
      </div>
      <nav className="navbar">
        <Navbar />
      </nav>
    </Router>
  )
}

export default App;
