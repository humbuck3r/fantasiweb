import React from 'react';
import Products from './../Products/Products';
import Services from './../Services/Services';
import './Prod-serv.css'



const ProdServ = () => {
    return (
        <div className='prodserv'>
            <Services/>
            <Products/>
        </div>
    );
}

export default ProdServ;
