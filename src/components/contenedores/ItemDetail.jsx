import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import {  useCartContext } from '../../context/CartContext'


const ItemDetail = ({prod}) => {
    const [count,setCount] = useState (1)

    const {cartList, showList, addToCart}= useCartContext()
    console.log (cartList)
    console.log(showList())
    console.log(count)
     
    const onAdd = (cantidadAgregada) => {
         setCount(cantidadAgregada) 
         addToCart({...prod, cantidad : cantidadAgregada})
        }

    console.log (cartList)
 
    return (
        <div>
             
            <img width= "150px" src={prod.img} alt={prod.title} />
                <div>
                       
                    <h4>{prod.id}</h4>
                    <h4>{prod.title}</h4>
                    <p>{prod.description}</p>
                    <p>$ {prod.price}</p>
                    <ItemCount  stock={10} initial={1}  onAdd={onAdd}/>
                    
                </div>
               
            
        </div>
    )
}

export default ItemDetail
