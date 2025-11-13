import Item from "../Item/Item.jsx"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getData, {getProductsByCategory} from '../../data/FirestoreService.js' 

function ItemListContainer (props) {
    const [productos, setProductos] = useState ([]);
    const {catParam} = useParams ();
    // GETDATA ESTA SIMULANDO UN FETCH 
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
        <div className="ItemList">
        <h1>Productos</h1>
        {
            productos.map (item => <Item 
              key={item.id}
              {...item} />  
            )
        } 
        </div>
    )
}

export default ItemListContainer;