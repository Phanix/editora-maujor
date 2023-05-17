import logo from './logo.svg';
import Topo from './components/Topo';
import Home from './components/Home';
import Rodape from './components/Rodate';
import Principal from './components/Principal';
import NotFound from './components/NotFound';
import Catalogo from './components/Catalogo';
import Design from './components/Design';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Livro from './components/Livro';
import axios from 'axios';

function App() {
  /**
   * oque e compoenente state
   * estados do componente que pode ser passado para os filhos e modificados pelos filhos alterando o componente * como referencia
   * react -> biblioteca javascript para criacao de aplicativos web
   * vantagem -> usar blocos de elementos
   * oque eu gosto -> javascript, app, trabalhar com blocos de elementos, passar dados, 
   */
  const [livros, setLivros] = useState(
    []
  );
 

  useEffect(() => {
    fetch('./api/todosOsLivros.json')
      .then(result => result.json())
      .then(allBooks => {
        setLivros(allBooks)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <>
      
      
      <BrowserRouter>
      <Topo />
        <Routes>
          <Route path="/" element={<Home livros={livros}/>} />
          <Route path="/frontend" element={<Frontend livros={livros}/>} />
          <Route path="/programacao" element={<Programacao livros={livros}/>} />
          <Route path="/design" element={<Design livros={livros}/>} />
          <Route path="/catalogo" element={<Catalogo livros={livros}/>} />
          <Route path="/livro/redacao-estrategica-para-ux" element={<Livro livro={livros[0]}/> } />
          <Route path="/livro/:livroSlug" element={props => {
            const livro = livros.find(
              livro => livro.slug === props.match.params.livroSlug);
              if(livro) {
                console.log("found");
                return <Livro livro={livro} />;
              }
              else{
                console.log("not found");
                return <NotFound />
              }
          }}
          />
          <Route Component={NotFound} />
        </Routes>
      </BrowserRouter>
      <Rodape />
    </>
  );
}

export default App;
