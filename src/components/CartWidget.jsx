 import carrito from '../assets/imagenes/carrito.png'
 import { useCartContext } from '../context/CartContext'
 
  function CartWidget() {
  const {totalItemCart} = useCartContext()
  return (
        <div className="cartwidget-container">
             <img  src= {carrito} width= "32px" className="iconoCarrito" alt="carrito de compras"/>
             <span className="badgeStyle badge badge-pill badge-default">{totalItemCart()}</span>
        </div> 
 );

}
 
               
              
    
         
  


export default CartWidget