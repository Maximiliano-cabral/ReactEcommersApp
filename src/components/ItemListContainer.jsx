import Item from "./Item"

export default function ItemListContainer () {
    return (
        <div className="ItemList">
            <h1>Productos</h1>
            <Item title="vans" img= "https://production.cdn.vaypol.com/variants/51c7pzwyo8rty096v2t992a4n78l/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4" price="3000"/>
            <Item title="nike" img="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw26c551c7/products/NIFQ4296-101/NIFQ4296-101-6.JPG" price="2500"/>
            <Item title="dc" img="https://cdn.dcshoes.com.ar/media/catalog/product/cache/ac316686c40ec26114bfd36dff5801a0/1/2/1252112014-10_1_1.jpg" price="4000"/>
        </div>
    )
}
