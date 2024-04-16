/*
DOCUMENTACIÓN:
Se crea un componente funcional para el título de la aplicación.
Se utiliza un objeto para dar estilo al texto.
Se renderiza el título.
Se exporta el componente Titulo. 
*/

const Titulo = () => {

    const textStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "4em",
        color: "#333", // Color de texto oscuro
        backgroundColor: "#f0f0f0", // Color de fondo claro
        padding: "20px", // Espaciado interno
        borderRadius: "5px", // Bordes redondeados
        boxShadow: "0 10px 40px rgba(0, 255, 255, 0.5)", // Sombra sutil
      };

    return (
        <h1 style={textStyle}>Notes</h1>
    );
};

export default Titulo;