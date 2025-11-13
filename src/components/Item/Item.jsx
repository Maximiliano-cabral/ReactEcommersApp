
import { Link } from "react-router";   

function Item(props) {
    return (
        <div className="Productos">
            <img width="200px" src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>Precio: ${props.price}</p>
            <Link to={`/detalle/${props.id}`}>
                <button>Ver más detalle</button>
            </Link>
        </div>
    )
}

export default Item;