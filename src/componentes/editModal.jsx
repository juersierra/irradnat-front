import React, { useState, useEffect } from 'react';
import { Modal, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';


const Editmodal = (props) => {
    
    const URL = 'https://irradnat-back-production.up.railway.app/';
    
    const [inputs, setInputs ] = useState({});

    useEffect(() => {
        const getFoto = () => {
          const data = {
            nombre:props.nombre,
            dimension:props.dimension,
            tecnica:props.tecnica,
            anio:props.anio,
            serie:props.serie,
            precio:props.precio,
            foto:props.foto
          }
          setInputs(data);
        }
        getFoto();
      });

      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
        console.log(inputs);
      };

      const handleEdit = async(id) =>{
        await axios.post(`${URL}${id}`, inputs)
      }


    return (
            <Modal show={props.show} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>EDITAR FOTO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset disabled>
                        <Form.Group className="mb-3" style={{ width:'90%' }} as={Row} >
                            <Form.Label htmlFor="disabledTextInput">ID</Form.Label>
                            <Form.Control id="disabledTextInput" readOnly defaultValue={props.id} />
                        </Form.Group>
                    </fieldset>
                    {Object.keys(inputs).map((key, index) => (
                        <Form.Group className="mb-3" key={index} style={{ width:'90%' }} as={Row}>
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
                    <Button variant="primary" onClick={() => {(handleEdit(props.id))}}>
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={props.hide}>
                        Cerrar ventana
                    </Button>
                </Modal.Footer>
            </Modal>
        )
}

export default Editmodal;