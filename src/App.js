import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer';
import Maps from './Components/Map/Map';
import ProdServ from './Components/Prod-serv/Prod-serv';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ProdServ/>
      <About/>
      <Maps/>   
      <Footer/>  
    </div>
  );
}

export default App;
