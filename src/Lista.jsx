/*
DOCUMENTACIÓN:
Se importa todo lo necesario para que la aplicación funcione correctamente.
Se crea un componente funcional para la lista de notas.
Se renderiza una lista de notas.
Se utiliza .map para recorrer la lista de notas y renderizar cada una de ellas.
Se exporta el componente Lista. 
*/

import React from 'react';

const Lista = ({props}) => { // Los props se pasan como argumento pero es una lista de notas lo que se espera

    const textStyle = {
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "2em",
        color: "#FFFFFF", // Color de texto claro
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Color de fondo claro
        margin: "10px", // Espaciado externo
    };
    
    return (
        <ul>
            {props.map((note) => (
                <li key={note.id} style={textStyle}>{note.content}</li>
            ))}
        </ul>
    );
};

export default Lista;