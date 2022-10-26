import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer';
import ProdServ from './Components/Prod-serv/Prod-serv';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ProdServ/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
