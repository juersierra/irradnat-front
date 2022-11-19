import React from 'react';
import { Link } from 'react-router-dom';


function Laobra() {
    return (
        <section className="container-fluid texto">
            <section className="">
                <div className="container">
                    <p>La exposición trata de la conexión entre lo humano y lo espiritual que yace en la flora que nos rodea. Percibir el aura de los elementos a través de las vibraciones y colores.</p>
                    <p>Con estas fotografías iniciamos un viaje hacia el mundo de lo perceptivo, nos adentramos en sus formas y conectamos con lo que sentimos al verlas.</p>
                    <p>El proceso artístico que enmarco en esta selección busca desdibujar la nitidez de una fotografía documental de naturaleza e interpretar la irradiación natural que emana de las plantas cuando conectamos con su energía.</p>
                    <p>Esta serie de fotos propone un espacio para la pausa e invita a la meditación que surge al tomarse el tiempo de descubrirlas.</p>
                    <p>Dice Natalia Albanese (gestora cultural y curadora): <q>La obra de Guillermina Bres da cuenta con una doble lectura posible; por un lado una sensibilidad que se entremezcla con la luminosidad y la paleta de colores que encaran sus registros y por el otro una mirada punzante ante la desigualdad social que atraviesan las imágenes que ella captura.</q></p>
                    <p>A esta muestra se suma una pieza de otra serie que contrasta la paz de lo natural. Se presenta en modo de protesta al descuido y desconexión ambiental que estamos teniendo. Nos plantea un futuro tóxico dentro de un presente desidioso.</p>
                    <div className="volver">
                        <p>
                            <Link to="/" className="volver-link">Volver</Link>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Laobra;