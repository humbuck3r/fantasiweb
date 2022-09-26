import React from 'react';
import Map from '../Map/Map';
import credentials from '../Map/Credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


const Contact = () => {
    return (
        <div>
            <div><h1>visitanos en nuestra tienda</h1>
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
