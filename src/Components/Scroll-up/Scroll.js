import React from "react";
import "./Scroll.css";
import Scrollup from '../../Assets/Img/Scrool UP.svg'
import { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div  >

      <a href="home">
        <img src={Scrollup} className="scroll-img scroll" alt="" onClick={()=>{
          window.scrollTo({top:0, left:0, behavior: 'smooth'});
        }} />
      </a>
    </div>
  );
};

export default Scroll;
