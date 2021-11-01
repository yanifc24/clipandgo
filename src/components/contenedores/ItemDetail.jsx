import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({prod}) => {
    
const agregarCarrito =(final) => {alert(`La cantidad que has agregado es: ${final} ` ) }  
 
    return (
        <div>
             
            <img width= "150px" src={prod.img} alt={prod.title} />
                <div>
                       
                    <h4>{prod.id}</h4>
                    <h4>{prod.title}</h4>
                    <p>{prod.description}</p>
                    <p>$ {prod.price}</p>
                    <ItemCount  stock={10} initial={1}  onAdd={agregarCarrito}/>
                    
                </div>
               
            
        </div>
    )
}

export default ItemDetail
