import { Link } from "react-router";
import '../Item/Item.css'

function Item(props) {
  return (
    <div className="Productos">
      <img width="200" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>Precio: ${props.price}</p>
      <Link to={`/detalle/${props.id}`}>
        <button className="btn-detail">Ver más detalle</button>
      </Link>
    </div>
  );
}

export default Item;