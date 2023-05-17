import { Link } from 'react-router-dom';
const NotFound = () => {
    console.log("not found");
    return (
        <main className="principal">
            <h2>404!</h2>
            <p>
                Pagina nao encontrada ou removida, <Link to="/">Ir para Home Page</Link>
            </p>
        </main>
    );
};

export default NotFound;