import React from 'react';
import { Link } from 'react-router-dom';


function Bio() {
    return (
        <section className="container-fluid texto">
            <section className="">
                <div className="container">
                    <p>Diseñadora Gráfica egresada de la Universidad Nacional del Nordeste. Fotógrafa profesional. Artista.</p>
                    <p>Actualmente coordinadora de comunicación y directora de arte en la Secretaría de Turismo y Cultura de la Municipalidad de la Ciudad de Corrientes. Fundadora de <a href="http://www.instagram.com/agua_contenidos">Agua Contenidos Visuales</a>, un estudio de fotografía y vídeo con enfoque publicitario.</p>
                    <p>Muestra colectiva Universidad de la Cuenca del Plata 2012. Fotografía de obra Arte Co (Feria de Arte de la Ciudad de Corrientes). Fotografía de naturaleza (Rewilding Argentina). Fotografía documental y retratos de la ciudad de Corrientes. Co-fundadora de NEACTIVA, Encuentro de Diseño e Industria Creativa. Fotografía semifinalista en el Premio Itaú a las Artes Visuales 2022. Muestra fotográfica individual "Irradiación Natural" actualmente expuesta hasta el 19 de Octubre del 2022 en "El Vivero" de Espacio Mariño.</p>
                    <p>La curiosidad por la fotografía empezó desde muy chica. Cuando era niña me atraía poder congelar esos momentos que me parecían divertidos o aquellos en donde estaban involucrados los afectos. Pero más allá de todo el contexto, me sentía especialmente seducida por la imagen, la composición, los colores, las texturas.</p>
                    <p>La fotografía se transformó en un puente entre la realidad y los mundos imaginarios o supuestos que me gustaba pensar. Me conecta con personas, situaciones, espacios, paisajes, desde una mirada poética. A su vez, ser narradora de historias a través de la imagen, me anima a confiar que soy una parte activa de este mundo, capaz de generar una emoción, una reflexión o de transformarlas. Sin duda esta facultad que me otorgo, es lo que me motiva a seguir registrando cada día con la cámara como herramienta.</p>
                    <p>Toda la experiencia en mi profesión como diseñadora y comunicadora sumado a los años de fotografía profesional en el campo de la publicidad y el marketing me han llevado a explorar ya hace 6 años el linde de la fotografía como arte.</p>
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

export default Bio;