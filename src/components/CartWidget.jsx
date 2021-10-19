import carrito from '../assets/imagenes/carrito.png'


 function CartWidget() {
  return (
    <div>
       <img src= {carrito} width= "32px" className="iconoCarrito" alt="carrito de compras"/>
    </div>
  )
}
export default CartWidget