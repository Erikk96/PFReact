import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAG4XjXtolt4KZ3rNdIKhdBveMVnPKVLeI",
  authDomain: "malanzan-shop.firebaseapp.com",
  projectId: "malanzan-shop",
  storageBucket: "malanzan-shop.appspot.com",
  messagingSenderId: "233622629527",
  appId: "1:233622629527:web:f5e9833ce92ff987134dd2"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default db;

export async function getAllItems() {
  const miColec = collection(db,'items');
  const itemsSnapshot = await getDocs(miColec);

  return itemsSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
})};

export async function getItemsByCategory(categoryid){
  const miColec = collection(db,'items');
  const queryItem = query(miColec, where("category", '==', categoryid));
  const itemSnapshot = await getDocs(queryItem);

  return itemSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
  
})};

export async function getItem(id){
  const miColec = collection(db,'items');
  const itemRef = doc(miColec, id);
  const itemSnapshot = await getDoc(itemRef);

  
      return {
      ...itemSnapshot.data(),
      id: itemSnapshot.id
      }
  
};

export async function createBuyOrder(orderData){
  const buyTimeStamp = Timestamp.now();
  const orderWithDate = {
      ...orderData,
      date: buyTimeStamp
  };
  const miColec = collection(db,'buyOrders');
  const orderDoc = await addDoc(miColec, orderWithDate);
  return orderDoc.id;   
}