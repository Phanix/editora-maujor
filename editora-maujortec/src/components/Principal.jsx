import Home from './Home';
const tituloPagina = "Ultimos lancamentos";
const dados = [
    {isbn: "978-85-7522-xxx-x", titulo : "React", autor: "Maujor"},
    {isbn: "978-85-7522-766-3", titulo: "Design UX", autor: "Will"},
    {isbn: "975-85-6666-475-1", titulo: "Laravel para Ninjas", autor: "Jack"}
]
const Principal = () => <Home dados={dados} tituloPagina={tituloPagina} />

export default Principal;