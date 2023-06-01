import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';
function App() {
  const [title, setTitle] = useState("");
  const [colores, setColores] = useState([]);

  useEffect(() => {
    const savedColores = localStorage.getItem("colores");
    if (savedColores) {
      setColores(JSON.parse(savedColores));
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveColor = () => {
    const updatedColores = [...colores, title];
    setColores(updatedColores);
    localStorage.setItem("colores", JSON.stringify(updatedColores));
    setTitle("");
  };
  const handleDeleteColor = (index) => {
    const updatedColores = colores.filter((_, i) => i !== index);
    setColores(updatedColores);
    localStorage.setItem("colores", JSON.stringify(updatedColores));
  };
  return (
    < >
    <div className="bg-light"> 
      <h1 className="titulo">Ingresa un color para guardar</h1>
      <input type="text" value={title} onChange={handleTitleChange} />
      <button onClick={handleSaveColor} className="btn-edit">Guardar</button>
      </div>
   
      <div className="py-5">
      
      {colores.map((color, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{color}</Card.Title>
              <Button variant="danger" onClick={() => handleDeleteColor(index)}>
                Borrar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>

  );
}

export default App;
