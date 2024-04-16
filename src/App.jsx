/* 
DOCUMENTACIÓN:
Se importa todo lo necesario para que la aplicación funcione correctamente. 
Se exporta la URL de la API para poder ser utilizada en otros componentes. 
Se crea un componente funcional que renderiza un título, una lista y un formulario. Se utiliza el hook useEffect para realizar una petición GET a la API y obtener las notas. 
Se renderiza el título, la lista y el formulario. 
Se exporta el componente App.
*/

import { useState, useEffect } from "react";
import axios from "axios";
import Titulo from "./Titulo";
import Lista from "./Lista";
import Formulario from "./Formulario"

export const baseUrl = 'http://localhost:3001/api/notes' // Se exporta la URL de la API para poder ser utilizada en otros componentes

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <Titulo />
      <Lista props={notes} />
      <Formulario setNotes={setNotes} />
    </div>
  );
};

export default App;