import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage'
import Professionals from './Components/Professionals';
import Offer from './Components/Offer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <LandingPage />
      <Professionals />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
