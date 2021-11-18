import carrito from '../assets/imagenes/carrito.png'
import { useCartContext } from '../context/CartContext'
import Badge from 'react-bootstrap/Badge'


 function CartWidget() {
  const {totalItemCart} = useCartContext()
    
  
 
       return (
         

          <div className="widgetNone">
     
             <Badge pill bg="info" className="badgeStyle"> {totalItemCart()}</Badge>
             <img  src= {carrito} width= "32px" className="iconoCarrito" alt="carrito de compras"/>
     
             </div> )
   
  
        }
  


export default CartWidget