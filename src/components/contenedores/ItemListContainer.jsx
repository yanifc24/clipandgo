

import ItemList from './ItemList'
import {useState,useEffect} from 'react'
// import GetFetch from '../../components/GetFetch'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../services/getFirestore'

 function ItemListContainer({greeting}) {
   
   const [product,setProduct] = useState ([])
   const {idCategoria} = useParams()
   const [loading, setLoading] = useState(true);
  

   useEffect(() => {
    const db = getFirestore() 
        
    if (idCategoria) {

        const byCategory= db.collection("items").where("category", "==",idCategoria ).get()

        byCategory
        .then(response => setProduct(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
        .catch (error => alert("Error:", error))
       
    }

    else {

        const totalData = db.collection("items").orderBy("category").get()

        totalData
        .then(response => setProduct(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
        .catch (error => alert("Error:", error))
        
    }

    setTimeout(() => { setLoading (false) }, 2000);

   },[idCategoria])
 
  return (
    <div>
       
         <h1>{greeting}</h1>
         {loading
                ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
               
                :
                
         <ItemList product={product}/>
       }
    </div>
  )
}
export default ItemListContainer







   

