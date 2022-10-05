import React, { Component } from "react";
import GoogleMaps from 'simple-react-google-maps';

export default class Maps extends Component {
  render() {
    return (
      <div className="title">
        <h1>VISITANOS EN NUESTRA TIENDA</h1>
        <GoogleMaps
            style={{height:"664px",width:"100%"}}
          apiKey={"AIzaSyCXK_c_Q7Dt9IMMcwFz9U2tTuL6cFJh07E"}
          zoom={18}
          center={{ lat: -32.92895557320445, lng: -68.85619741502785 }}
          markers= {{lat: -32.92895557320445, lng: -68.85619741502785}}
        />
      </div>
    );
  }
}
