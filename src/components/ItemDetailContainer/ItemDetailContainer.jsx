import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { getProductById } from "../../data/FirestoreService";


function ItemDetailContainer (){
    const [itemData, setItemData] = useState ({loader:true});
    const {idParam} = useParams();
    useEffect (()=> {
        getProductById (idParam).then (res => setItemData (res));
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