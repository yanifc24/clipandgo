
import ItemCount from  './ItemCount'
import ItemList from './ItemList'
import {useState,useEffect} from 'react'
import GetFetch from '../../components/GetFetch'


 function ItemListContainer({greeting}) {
   const agregarCarrito = (final) => {alert(`La cantidad que has agregado es: ${final} ` ) } 
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
        <ItemCount stock={10} initial={1} onAdd={agregarCarrito} />
        <ItemList product={product}/>
               
      
         
    </div>
  )
}
export default ItemListContainer







   

