import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { getProductById } from "../../data/mockAPIService";

function ItemDetailContainer (){
    const [itemData, setItemData] = useState ({loader:true});
    const {id} = useParams();
    useEffect (()=> {
        getProductById (id).then (res => setItemData (res));
    },[]);
    return (
        <div>
            {
                itemData.loader ? <h5>Cargando...</h5>
                : <div>
                    <img src={itemData.img} alt="" />
                    <h3>{itemData.title}</h3>
                    <p>Precio: $ {itemData.price}</p>
                    <ItemCount  product={itemData} />
                </div> 
            }
        </div>
    )
}
export default ItemDetailContainer; 