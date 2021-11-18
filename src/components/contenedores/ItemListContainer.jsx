

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
     const dbQuery= db.collection ('items').get()
     
     dbQuery
     .then (resp=>setProduct(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
     .catch (error => alert("Se ha encontrado un error:", error))

    setTimeout(() => { setLoading (false)
            
    }, 2000);

       /* if (idCategoria) {
           GetFetch
           .then(res => {setProduct(res.filter(prod => prod.category === idCategoria))
           })
           .catch (error => alert("Se ha encontrado un error:", error))
       }
       else {
           GetFetch
           .then(res => { setProduct(res)})
           .catch (error => alert("Se ha encontrado un error:", error))
       } */
   },[idCategoria])
 
  return (
    <div>
       
         <h1>{greeting}</h1>
         {loading
                ? <h2 >Cargando...</h2>
                :
         <ItemList product={product}/>
       }
    </div>
  )
}
export default ItemListContainer







   

