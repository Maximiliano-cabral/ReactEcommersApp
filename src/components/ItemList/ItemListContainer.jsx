import Item from "../Item/Item.jsx"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getData, {getProductsByCategory} from '../../data/FirestoreService.js' 

function ItemListContainer (props) {
    const [productos, setProductos] = useState ([]);
    const {catParam} = useParams ();
      useEffect(() => {
        if (catParam ){
          getProductsByCategory (catParam).then ((data)=>setProductos (data))
        }else {
    getData()
      .then((data) => {
        console.log("datos recibidos", data);
        setProductos(data);
      })
      .catch(() => {
        console.error("Error al obtener datos");
      });
    }
  }, [catParam]);
    return (
        <div className="item-list-container">
        <h1 className="item-list-title">Productos</h1>
        <div className="item-list-grid">
        {
            productos.map (item => <Item 
              key={item.id}
              {...item} />  
            )
        } 
        </div>
        </div>
    )
}

export default ItemListContainer;