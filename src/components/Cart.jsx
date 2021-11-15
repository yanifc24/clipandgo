
import {Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext"; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {
    
     const {cartList, totalPrice, deleteItem, deleteCart} = useCartContext()

    return (
        
        <div className="seccionCart">
             <div>
                 <h2 >Mi carrito</h2>
             </div>
             {cartList.length ? 
             <Table>
             <thead className= "headStyle">
                <tr>
                  <th className= "headStyle">Nombre del producto</th>
                  <th className= "headStyle">Descripición</th>
                  <th className= "headStyle">Cantidad</th>
                  <th className= "headStyle">Precio</th>
               </tr>
             </thead>
           </Table> 
              
            :
             <div>
                <p>El carrito está vacío.</p>
                
             </div>}      
             
                      
                 
            {cartList.map(cartItem => 
           
                <div key={cartItem.id} >
                
             <Table>
                     
                    <tbody >
                         <tr>
                             <td> <h5 >{cartItem.title}</h5><img className= "cartItemImg" src={cartItem.img} alt="imagen"/></td>
                             <td><p>{cartItem.description}</p></td>
                             <td><p>{cartItem.cantidad}</p></td>
                             <td><p>$ {cartItem.price}</p>
                                 <p onClick={() => deleteItem(cartItem.id)}><img src='../pictures/imagenes/delete.png'  alt="delete" width= "32px"/>
                                 </p>
                                 </td>
                            
                         </tr>
  
                     </tbody>
             </Table>       
                    
                </div>
                
            )} 
            
          {cartList.length ? 
             <div>
                <Button variant="warning" onClick={() => deleteCart()}>Vaciar carrito</Button>
                <p className="totalPrice">{`Precio Final: $ ${totalPrice()} `}</p>
             </div>  
            :
             <div>
                <p>¡Comienza tu compra!</p>
                <Link  to="/"> 
                <h4>Ir al inicio</h4>
                </Link>
            </div>}          
        </div>
    )
}

export default Cart

