import {Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext"; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../services/getFirestore';
import Form from "./contenedores/Form";

const Cart = () => {
     const [orderId, setOrderId] = useState("");
     const {cartList, totalPrice, deleteItem,formData, deleteCart} = useCartContext()

     const generateOrder = () => {
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData;
        order.total = totalPrice();
        order.items = cartList.map(item => {
            const id =item.id;
            const title = item.title;
            const price = item.price;
            const subtotal = item.price * item.quantity;
            return {id, title, price, subtotal}
        })

        const db = getFirestore()

        db.collection('orders').add(order)
        .then(res => setOrderId(res.id))
        .catch (error => alert("Error:", error))
        .finally(()=>deleteCart())

        const updateStock = db.collection("items").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.id))

        const batch = db.batch();
        updateStock.get()
        .then(res => {
            res.docs.forEach(docSnapshot => {  batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).quantity
                })
            })
        
        batch.commit()
        .catch (error => alert("Error:", error))
        })
    }
  
    return (
        <div className="cartSection">
             <div>
                 <h2>Mi carrito</h2>
             </div>
            
             <Table className="container-fluid tablaCompra"  hidden={cartList.length > 0 ? false : true}>
                     <thead>
                            <tr className=" text-center hide">
                             <th>Id del producto</th>
                             <th>Nombre del producto</th>
                             <th>Cantidad</th>
                             <th>Precio</th>
                           </tr>
                     </thead>
                     <tbody>
                           {cartList.map( cartItem => 
                            <tr className="p-3 m-2 text-center " key={cartItem.id} >
                                  <td className="hide"><p>{cartItem.id}</p></td>
                                  <td><h5>{cartItem.title}</h5><img className= "cartItemImg " src={cartItem.img} alt="imagen"/></td>
                                  <td><p> {cartItem.quantity}</p></td>
                                  <td>
                                     <p>$ {cartItem.price}</p>
                                     <p className="deleteIcon" onClick={() => deleteItem(cartItem.id)}><img src='../pictures/imagenes/delete.png'  alt="delete" width= "32px"/></p>
                                     <p> Subtotal: $ {cartItem.price * cartItem.quantity}</p>
                                  </td>  
                           </tr>)} 
                   </tbody>     
                </Table>       
            
                {cartList.length ? 
                 <div>
                     <Button variant="warning" onClick={() => deleteCart()}>Vaciar carrito</Button>
                     <p className="totalPrice">{`Precio Final: $ ${totalPrice()} `}</p>
                 </div> 
            
               : orderId=== ""
                ? 
             <div>
                 <div className="cartVacio">
                      <p>No hay productos en tu carrito de compras</p>
                       <p>Te pedimos que vuelvas a intentarlo ingresando aquí.</p>
                     <Link to="/">
                         <h5>Inicia tu compra</h5>
                     </Link>
                </div>
            </div>
                : 
                <div className="successOrder">
                     <p>La operación ha sido exitosa</p>
                     <p>¡Gracias por su compra!</p>
                     <p>Id de operación: {orderId}</p>
                </div>
            }
            <div className= {cartList.length ? "filled-cart"  : "not-filled-cart" }> 
            <Form generateOrder={generateOrder}/>
        </div>
        </div>   
    )}
        
export default Cart

