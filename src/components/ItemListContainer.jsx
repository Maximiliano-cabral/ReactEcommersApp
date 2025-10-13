import Item from "./Item"
import ItemCount from "./ItemCount";
import productosZapas from '../data/data.js';
import getData, { getProductsByCategory } from "../data/mockAPIService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


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