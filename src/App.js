import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Maps from './Components/Map/Map';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Services/>
      <Products/>
      <About/>
      <Maps/>   
      <Footer/>  
    </div>
  );
}

export default App;
