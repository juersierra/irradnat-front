import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';


const Createmodal = (props) => {
    
    const URL = 'https://irradnat-back-production.up.railway.app/';
    
    const [inputs, setInputs ] = useState({
        anio:"",
        nombre:"",
        serie:"",
        dimension:"",
        tecnica:"",
        precio:"",
        foto:""
      });

      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
      };

      const handleSend = async() => {
        await axios.post(`${URL}crear`, inputs);
        setInputs({
        anio:"",
        nombre:"",
        serie:"",
        dimension:"",
        tecnica:"",
        precio:"",
        foto:"",
        });
        window.location.reload(false);
      };


    return (
            <Modal show={props.show} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>AGREGAR FOTO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.keys(inputs).map((key, index) => (
                        <Form.Group className="pt-3" key={index} style={{ maxWidth:"200px"}}>
                            <Form.Label id="form">
                                {key === "id"?key:key[0]+key.slice(1)}
                            </Form.Label>
                            <Form.Control
                                name={key}
                                value={inputs[key]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))}
                 </Modal.Body>
                 <Modal.Footer>
                    <Button className="mt-3" onClick={handleSend}>
                        Enviar
                    </Button>
                    <Button variant="secondary" onClick={props.hide}>
                        Cerrar ventana
                    </Button>
                </Modal.Footer>
            </Modal>
        )
}

export default Createmodal;