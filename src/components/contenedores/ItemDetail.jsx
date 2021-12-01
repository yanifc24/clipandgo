import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
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
        <div className= "detailCard">
             
             <img className="imgDetail"   src={prod.img} alt={prod.title} />
            <Card    className="text-center m-5  tamañoDetailCard">
              
                 <Card.Header className="colorTitle"> <h1 className="fontTitle">{prod.title}</h1></Card.Header>
                 <Card.Body>
                    <Card.Title><h2 hidden className="idStyle">Id del producto: {prod.id}</h2></Card.Title>
                    <Card.Text>
                         <p>{prod.description}</p>
                          
                                  
                        <h3 className="alignCount"><ItemCount  stock={prod.stock} initial={1}  onAdd={onAdd}/></h3>
                                 

                                  
                         
                      
                    </Card.Text>
   
            </Card.Body>
            
            </Card>
                
                
            
        </div>
    )
}

export default ItemDetail
