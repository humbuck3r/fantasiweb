import React from 'react';
import Map from '../Map/Map';
import credentials from '../Map/Credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


const Contact = () => {
    return (
        <div className='contact'>
            <div className='title-contact'><h1>visitanos en nuestra tienda</h1></div>
             <div className='map-contact'>
             <Map 
            //googleMapURL = {mapURL}
            //containerElement= {<div style={{height : '400px'}}/>}
            //mapElement = {<div style={{height:'100%'}}/>}
            //loadingElement = {<p>Cargando</p>}
            
            /></div>
        </div>
    );
}

export default Contact;
