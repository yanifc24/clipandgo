import carrito from '../assets/imagenes/carrito.png'
//  import { useCartContext } from '../context/CartContext'

 function CartWidget() {
  //  const {itemQuantity} = useCartContext()
  return (
    <div>
     
       {/* <span className="cartwidget-quantity">{itemQuantity}</span> */}
       <img  src= {carrito} width= "32px" className="iconoCarrito" alt="carrito de compras"/>
     
     
    </div>
  )
}
export default CartWidget