import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './main.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Frens from './pages/frens';
import Lrbd from './pages/lrbd';
import Wallet from './pages/wallet';
import { useState, useEffect } from 'react';

// Define types for Telegram and WebApp
interface TelegramWebApp {
  ready(callback: () => void): void;
  expand(): void;
  disableVerticalSwipes(): void;
  platform(): string;
}

interface Telegram {
  WebApp: TelegramWebApp;
}

// Extend the global window object
declare global {
  interface Window {
    Telegram: Telegram;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const webApp = window.Telegram.WebApp;
    webApp.expand();
    webApp.disableVerticalSwipes();

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className='loadcol'>
          <svg className='spinner' height="100%" viewBox="0 0 32 32" width="100%">
            <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style={{ stroke: 'rgb(29, 155, 240)', opacity: 0.2 }}></circle>
            <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style={{ stroke: 'rgb(29, 155, 240)', strokeDasharray: 80, strokeDashoffset: 60 }}></circle>
          </svg>
        </div>
      ) : (
        <div className='container'>
          <div className="main">
              <ScrollToTop />
              <div className="mainCon">
                <Routes>
                  <Route path="x/tasks" element={<Tasks />} />
                  <Route path="x/" element={<Home />} />
                  <Route path="x/lrbd" element={<Lrbd />} />
                  <Route path="x/frens" element={<Frens />} />
                  <Route path="x/wallet" element={<Wallet />} />
                </Routes>
              </div>
            </div>
            <nav className="navbar">
              <Navbar />
            </nav>
        </div>
      )}
    </Router>
  );
}

export default App;
