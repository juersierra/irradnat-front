import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Editmodal from './editModal';
import Createmodal from './createModal';



const Formulario = () => {

  const [catalog, setCatalog] = useState([]);
  const [showedit, setShowedit] = useState(false);
  const [showcreate, setShowcreate] = useState(false);
  const [tempfoto, setTempfoto] = useState({
    anio:"",
    nombre:"",
    serie:"",
    dimension:"",
    tecnica:"",
    precio:"",
    foto:""
  });

  const URL = 'https://irradnat-back-production.up.railway.app/';

  useEffect(() => {
    const getCatalog = async() => {
      const data = await axios.get(URL);
      setCatalog(data.data.catalog);
    }
    getCatalog();
  }, []);
  

  const hideEditModal = () => {
    return (
      setShowedit(false),
      window.location.reload(false)
    )
  }

  const hideCreateModal = () => {
    return (
      setShowcreate(false),
      window.location.reload(false)
    )
  }

  const handleEditModal = e => {
    let tempFoto = {id:e._id, anio:e.anio, nombre:e.nombre, serie:e.serie, dimension:e.dimension, tecnica:e.tecnica, precio:e.precio, foto:e.foto};
    setTempfoto(tempFoto);
    return setShowedit(true);
  }

  const handleCreateModal = () => {
    return setShowcreate(true);
  }
  
  const handleDelete = async(id) => {
    await axios.delete(`${URL}${id}`);
    window.location.reload(false);
  }

  return (
    <div className='d-flex flex-column'>
      <div className='container'>
        <h1>Fotos</h1>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>nombre</th>
              <th>dimensiones</th>
              <th>tecnica</th>
              <th>año</th>
              <th>serie</th>
              <th>precio</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {catalog.map((foto, index) => (
              <tr key={index}>
                <td>ID: {foto._id}</td>
                <td>{foto.nombre.toUpperCase()}</td>
                <td>{foto.dimension.toUpperCase()}</td>
                <td>{foto.tecnica.toUpperCase()}</td>
                <td>{foto.anio.toUpperCase()}</td>
                <td>{foto.serie.toUpperCase()}</td>
                <td>{foto.precio}</td>
                <td><Button variant="secondary" className="" onClick={()=>handleEditModal(foto)}>Editar</Button></td>
                <td><Button variant="danger" className="" onClick={()=>handleDelete(foto._id)}>Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant='success' style={{ width:'30%', height:'50px' }} className="" onClick={handleCreateModal}>Agregar Foto</Button>
      </div>
      {
        showedit === true ? <Editmodal id={tempfoto.id} nombre={tempfoto.nombre} dimension={tempfoto.dimension} tecnica={tempfoto.tecnica} anio={tempfoto.anio} serie={tempfoto.serie} precio={tempfoto.precio} foto={tempfoto.foto} hide={()=>hideEditModal()} show={()=>setShowedit(true)} />: ''
      }
      {
        showcreate === true ? <Createmodal hide={()=>hideCreateModal()} show={()=>setShowcreate(true)} />: ''
      }
      
    </div>
  );
}

export default Formulario;