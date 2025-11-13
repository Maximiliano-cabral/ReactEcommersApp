import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { getProductById } from "../../data/FirestoreService";
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loader: true });
  const { idParam } = useParams();

  useEffect(() => {
    getProductById(idParam).then((res) => setItemData(res));
  }, [idParam]);

  return (
    <div className="detail-wrapper">
      {itemData.loader ? (
        <div className="skeleton">
          <div className="skeleton-img" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ) : (
        <section className="detail-card">
          <img src={itemData.img} alt={itemData.title} className="detail-img" />
          <div className="detail-info">
            <h2 className="detail-title">{itemData.title}</h2>
            <p className="detail-price">Precio: $ {itemData.price}</p>
            <ItemCount product={itemData} />
          </div>
        </section>
      )}
    </div>
  );
}

export default ItemDetailContainer;