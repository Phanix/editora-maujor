const Livro = ({ livro }) => {
    console.log(livro);
    console.log("here a");
    return (
        <main className="principal">
            
            <div className="pag-livro">
                <h2>{livro.titulo}</h2>
                <div className="livro">
                <div className="thumb">
                <img src={"/imagens/capas/" + livro.id  + ".jpg"} alt="capa" /> 
                      
                    </div>
                    <ul>
                        <li>ISBN: {livro.isbn}</li>
                        <li>Ano: {livro.ano}</li>
                        <li>Paginas: {livro.paginas}</li>
                        <li>Preco: {livro.preco}</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Livro;