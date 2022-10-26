import React from "react";
import "./Scroll.css";

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
      <button
        className="scroll"
        onclick="topFunction()"
        id="myBtn"
        title="Go to top"
      ></button>
    </div>
  );
};

export default Scroll;
