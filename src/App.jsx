// App.js
import AuthPage from './AuthPage';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; // ← import your HomePage component
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Portal from './components/Portal';

const App = () => {
  // const [view, setView] = useState('landing'); // 'landing' | 'auth' | 'home'

  // const handleStart = () => setView('auth');
  // const handleLoginSuccess = () => setView('home');

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>

      {/* {view === 'landing' && <LandingPage onStart={handleStart} />} */}
      {/* {view === 'auth' && <AuthPage onAuthSuccess={handleLoginSuccess} />} */}
      {/* {view === 'home' && <HomePage />} */}
    </>
  );
};

export default App;
