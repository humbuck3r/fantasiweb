import React from 'react';
import Products from './../Products/Products';
import Services from './../Services/Services';
import './Prod-serv.css';
import Imghead from '../../Assets/Img/wave - header.png';


const ProdServ = () => {
    return (
        <div className='prodserv'>
            <img src={Imghead} className='prodhead'/>
            <Services/>
            <Products/>
        </div>
    );
}

export default ProdServ;
