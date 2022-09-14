import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Services/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
