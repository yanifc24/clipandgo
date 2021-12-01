 import carrito from '../assets/imagenes/carrito.png'
 import { useCartContext } from '../context/CartContext'
 import Badge from 'react-bootstrap/Badge'
 import {Link} from 'react-router-dom';

  function CartWidget() {
  const {totalItemCart} = useCartContext()
    
  return (
   <>
     {totalItemCart() > 0 ? (
        <Link to="/cart" className="cartwidget-container">
          
            <img  src= {carrito} width= "32px" className="iconoCarrito" alt="carrito de compras"/>
         
           <Badge className="badgeStyle badge badge-pill badge-default"  rounded-pill  >{totalItemCart()}</Badge>{' '}
          
         
            
        </Link>
        
          
         
       
     ) : (
       <></>
     )}
   </>
 );}
 
               
              
    
         
  


export default CartWidget