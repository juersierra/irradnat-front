import { Route, Routes } from 'react-router-dom';
import Header from './componentes/Navbar';
import Main from './componentes/Main';
import Formulario from './componentes/Formulario';
import Bio from './componentes/Bio';
import Laobra from './componentes/Laobra';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="formulario" element={<Formulario />} />
          <Route path="bio" element={<Bio />} />
          <Route path="laobra" element={<Laobra />} />
        </Routes>
    </>
  );
}

export default App;
