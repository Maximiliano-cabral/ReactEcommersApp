
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection,doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_AUTH,
  projectId: import.meta.env.VITE_FB_PROJET,
  storageBucket: import.meta.env.VITE_FB_STORAGE,
  messagingSenderId: import.meta.env.VITE_FB_SENDERID,
  appId: import.meta.env.VITE_FB_APPID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

async function getData () {
    const productsRef = collection (db, "products")
    const productsSnapshots = await getDocs (productsRef)
    const docs = productsSnapshots.docs;
    const  dataDocs = docs.map (item => {
      return {...item.data(), id: item.id}
    })
    return dataDocs;
}


export async function  getProductById(idParam) {
 const docRef = doc(db, "products", idParam)
 const docSnapshot = await getDoc(docRef);
 const docData = docSnapshot.data();
 const idDoc =docSnapshot.id; 
 return {...docData, id: idDoc };
}


export async function getProductsByCategory (catParam){    
    const productsRef = collection (db, "products")
    const q = query(productsRef,where("category", "==", catParam) )
    const productsSnapshots = await getDocs (q)
    const docs = productsSnapshots.docs;
    const  dataDocs = docs.map (item => {
      return {...item.data(), id: item.id}
    })
    return dataDocs;}


    export async function creatBuyOrder(orderData) {
      const ordersRef = collection (db, "orders");
      const newDoc = await  addDoc(ordersRef,orderData)
      return newDoc; 
    }


export default getData; 