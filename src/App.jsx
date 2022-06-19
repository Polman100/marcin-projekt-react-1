import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage'
import Professionals from './Components/Professionals';
import Offer from './Components/Offer';
import Footer from './Components/Footer';

//dlaczego nie działało autouzupełnianie? ^
//uporządkowanie w plików css


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
