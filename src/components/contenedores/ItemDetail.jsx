import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'

const ItemDetail = ({prod}) => {
    const [count,setCount] = useState (1)
    const { addToCart}= useCartContext()
   
    const onAdd = (addedQuantity) => {
         setCount(addedQuantity) 
         addToCart({...prod, quantity : addedQuantity})
        }

    return (
        <div className= "detailCard">
              <img className="imgDetail"   src={prod.img} alt={prod.title} />
              <Card className="text-center m-5  sizeDetailCard">
                  <Card.Header className="colorTitle"> <h1 className="fontTitle">{prod.title}</h1></Card.Header>
                  <Card.Body>
                       <Card.Title><h2 hidden className="idStyle">Id del producto: {prod.id}</h2></Card.Title>
                       <Card.Title>
                         {prod.description}
                       </Card.Title>   
                       <Card.Title className="alignCount">       
                         <ItemCount  stock={prod.stock} initial={count}  onAdd={onAdd}/> 
                       </Card.Title>
                   </Card.Body>
                </Card> 
        </div>
    )
}

export default ItemDetail
