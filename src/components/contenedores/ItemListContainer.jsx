

import ItemList from './ItemList'
import {useState,useEffect} from 'react'
import GetFetch from '../../components/GetFetch'
import {useParams} from 'react-router-dom'

 function ItemListContainer({greeting}) {
   
   const [product,setProduct] = useState ([])
   const {idCategoria} = useParams()

   useEffect(() => {

       if (idCategoria) {
           GetFetch
           .then(res => {setProduct(res.filter(prod => prod.category === idCategoria))
           })
           .catch (error => alert("Se ha encontrado un error:", error))
       }
       
       else {
           GetFetch
           .then(res => { setProduct(res)})
           .catch (error => alert("Se ha encontrado un error:", error))
       }
   },[idCategoria])
   
 
  return (
    <div>
         <h1>{greeting}</h1>
        
         <ItemList product={product}/>
         
    </div>
  )
}
export default ItemListContainer







   

