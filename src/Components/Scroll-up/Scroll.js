import React from "react";
import "./Scroll.css";
import Scrollup from '../../Assets/Img/Scrool UP.svg'


const Scroll = () => {
  let mybutton = document.querySelector("header");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>

      <a>
        <img src={Scrollup} className="scroll-img scroll" onClick={topFunction()} />
      </a>
    </div>
  );
};

export default Scroll;
