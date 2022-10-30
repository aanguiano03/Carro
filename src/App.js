import React, { useState, useEffect } from 'react';
import './style.css';
import Carro from './Carro.js';

export default function App() {
  //Esta es una variable que representaría al arreglo de objetos JSON que se podrían recuperar desde una API Rest.
  const personajesDesdeAPI = [
    {
      nombre: 'Bugatti',
      modelo: 'Bugatti',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmO4QaFHDmTFjFXECh_V3jd9sWQVqiySVJA&usqp=CAU',
      descripcion: 'El auto mas veloz y caro del mundo.',
      sonido: 'Brrr',
      anio: '2000',
    },
    {
      nombre: 'Camaro',
      modelo: 'International L-170',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6eH37Qz-RefFtkHC8kzeZQ8OGWT7DO3gHqJlix_qsM3gMV6m9Q_9qkj3YQurJGVvJQU&usqp=CAU',
      descripcion: 'Carro blanco deportivo.',
      sonido: 'BEEP',
      anio: '1960',
    },
  ];

  //variable de estado que nos permitirá almacenar a los personajes a pintar (renderizar).
  const [personajes, setPersonajes] = useState([]);

  //Un useEffect con dependencia de arreglo vacío [], siempre se dispara una vez al iniciar el componente.
  useEffect(() => {
    //TODO: Aquí iria la petición a la API utilizando FETCH y se asignaría la respuesta de la API a la variable personajesDesdeAPI, algo como esto:
    // personajesDesdeAPI = fetch("http://personajesdecars.com/all")
    
    //Se actualiza la variable de estado 'personajes' con los datos recuperados.
    setPersonajes(personajesDesdeAPI);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        //dibujar por cada personaje en la lista de personajes un componente Car.
        personajes.map((personaje) => (
          <Carro
            nombre={personaje.nombre}
            modelo={personaje.modelo}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            sonido={personaje.sonido}
            anio={personaje.anio}
          />
        ))
      }
    </div>
  );
}