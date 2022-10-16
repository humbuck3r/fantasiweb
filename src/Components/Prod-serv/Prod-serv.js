import React from 'react';
import Products from './../Products/Products';
import Services from './../Services/Services';
import './Prod-serv.css';
import Imghead from '../../Assets/Img/wave - header.png';
import Imgbot from '../../Assets/Img/wave- footer.png';

const ProdServ = () => {
    return (
      <div className="prodserv">
        <img src={Imghead} className="prodhead" />
        <img src={Imgbot} className="prodbot" />
        <Services/>
        <Products/>
      </div>
    );
}

export default ProdServ;
