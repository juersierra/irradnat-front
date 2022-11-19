import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Main = () => {

  const [catalog, setCatalog] = useState([]);

  const URL = 'https://irradnat-back-production.up.railway.app/';

  useEffect(() => {
    const getCatalog = async() => {
      const data = await axios.get(URL);
      setCatalog(data.data.catalog);
    }
    getCatalog();
  }, []);

  return (
    <div className='container p-2'>
      <Container>
        <Row xs={1} md={2} xl={3} className="d-flex justify-content-between">
          {catalog.map(foto=>(
            <Container>
              <Card className="text-center p-0 my-3" style={{height:'30rem'}}>
                <Container className="p-0" style={{height:'15rem'}}>
                  <Card.Img src={foto.foto} variant="top" style={{ weight:'100%'}} alt={foto.nombre}/>
                </Container>
                <Card.Body className='p-0 pb-2 d-flex align-items-end' tyle={{height:'15rem'}}>
                  <Container>
                    <Card.Title className="mt-2">{foto.nombre.toUpperCase()}</Card.Title>
                    <Card.Text className="card-text">{foto.nombre}</Card.Text>
                    <Card.Text className="card-text">{foto.dimension}</Card.Text>
                    <Card.Text className="card-text">{foto.precio}</Card.Text>
                  </Container>
                </Card.Body>
              </Card>
            </Container>
          ))}
        </Row>
      </Container>
    </div>
    );
}

export default Main;