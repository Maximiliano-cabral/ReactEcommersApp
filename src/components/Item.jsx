export default function Item (props) {
    return (
        <div className="Productos">
        <img  width="200px" src= {props.img} alt="zapatillas" />
        <h3>{props.title}</h3>
        <p> precio: {props.price}</p>
        <button>Ver mas detalle</button>
        </div>
    )
}


