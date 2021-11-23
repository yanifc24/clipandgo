import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import {  useCartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'



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
             
            <img width= "450px" src={prod.img} alt={prod.title} />
            <Card   style={{ width: '40rem' }} className="text-center m-5  locationCard">
       
                 <Card.Header> <h1>{prod.id}</h1></Card.Header>
                 <Card.Body>
                    <Card.Title><h2>{prod.title}</h2></Card.Title>
                    <Card.Text>
                         <p>{prod.description}</p>
                         <h3 className="alignCount"><ItemCount  stock={10} initial={1}  onAdd={onAdd}/></h3>
                    </Card.Text>
   
            </Card.Body>
            
            </Card>
                
                
            
        </div>
    )
}

export default ItemDetail
