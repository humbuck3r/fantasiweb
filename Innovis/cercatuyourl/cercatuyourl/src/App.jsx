import './App.css'
import axios from "axios";
import  { useState } from "react";
function App() {
   const [email, setEmail] = useState("");

   const handleChange = (event) => {
     setEmail(event.target.value);
   };

   const handleSubmit = async (event) => {
     event.preventDefault();

     
     const baseUrl =
       "https://7mlqnwdhqh.execute-api.sa-east-1.amazonaws.com/delete";

     try {
       
       const response = await axios.delete(`${baseUrl}/${email}`);

       
       console.log("Respuesta de la solicitud:", response);

       
       setEmail("");
     } catch (error) {
       
       console.error("Error al enviar la solicitud:", error);
     }
   };
  return (
    <>
    
      <div>
        <h2>Ingrese su correo electrónico para eliminar datos de la cuenta:</h2>
        <form onSubmit={handleSubmit} className="form-cont">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="ingresa correo"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default App
