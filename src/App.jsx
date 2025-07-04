// App.js
import AuthPage from './AuthPage';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; // ← import your HomePage component
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import PortalLayout from './components/PortalLayout';
import MetricOverview from './components/MetricOverview';
import MetricDetail from './components/MetricDetail';

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
        {/* <Route path="/portal" element={<Portal />} />
        <Route path="/portal/:label" element={<Portal />} /> */}

        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<MetricOverview />} />
          <Route path=":metricName" element={<MetricDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
