

import ItemList from './ItemList'
import {useState,useEffect} from 'react'
import GetFetch from '../../components/GetFetch'


 function ItemListContainer({greeting}) {
   
   const [product,setProduct] = useState ([])
    console.log (product)
   useEffect(() => {
   GetFetch
    
    .then (res => { setProduct(res)})
    .catch(err=> console.log (err))
    .finally ( ()  => console.log("esto se ve"))

   })
 
  return (
    <div>
         <h1>{greeting}</h1>
        
        <ItemList product={product}/>
         
    </div>
  )
}
export default ItemListContainer







   

