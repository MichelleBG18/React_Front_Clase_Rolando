/*
DOCUMENTACIÓN:
Se importa todo lo necesario para que la aplicación funcione correctamente.
Se exporta la URL de la API para poder ser utilizada en otros componentes.
Se crea un componente funcional para el formulario de creación de notas.
Se utiliza el hook useState para manejar el estado del formulario.
Se crea una función para manejar el cambio en el input del formulario.
Se crea una función para enviar la nota al servidor.
Se renderiza el formulario.
Se exporta el componente Formulario.
*/
import React, {useState} from "react";
import axios from "axios";
import { baseUrl } from "./App.jsx"

const Formulario = ({ setNotes }) => { // Se espera un setter para un objeto nota

  const textStyle = {
    backgroundColor: "#f0f0f0", // Color de fondo claro
    color: "#333", // Color de texto oscuro
    font: "bold 1em Arial, sans-serif",
    padding: "5px", // Espaciado interno
};
    
    const [newNote, setNewNote] = useState("");

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
          content: newNote,
          important: Math.random() < 0.5,
          date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
        };
    
        axios
          .post(baseUrl, noteObject)
          .then((response) => {
            console.log(response);
            setNotes((prevNotes) => [...prevNotes, response.data]);
            setNewNote("");
          });
    };
    
    return (
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange} style={textStyle}/>
            <button type="submit">Subir Nota</button>
        </form> 
    );
};

export default Formulario;
