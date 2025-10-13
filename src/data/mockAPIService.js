import productosZapas from "./data"

// Esta función simula ser un fetch 
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promesa exitosa")
            resolve(productosZapas)
        }, 1000)
    })
} 

// Nueva función Find para buscar un único producto dentro de mi array 
export function getProductById(id) {
    return new Promise((resolve) => {
        const itemRequest = productosZapas.find((item) => String(item.id) === String(id));
        setTimeout(() => { resolve(itemRequest) }, 1000); 
    });
}

export function getProductsByCategory (catParam)  {
    return new Promise((resolve) => {
        const itemsRequest = productosZapas.filter((item) =>{ return item.category === catParam});
        setTimeout(() => { resolve(itemsRequest) }, 1000); 
    });
}





export default getData;