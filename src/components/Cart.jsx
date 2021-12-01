import {Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext"; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../services/getFirestore';


const Cart = () => {
     const [orderId, setOrderId] = useState("");
     const [formData, setFormData]= useState({ 
     nombre:'',
     apellido:'',
     telefono:'',
     email: '',
});
     const {cartList, totalPrice, deleteItem, deleteCart} = useCartContext()

     const generateOrder = (e) => {

        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData;
        order.total = totalPrice();
        order.items = cartList.map(item => {
            const id =item.id;
            const title = item.title;
            const price = item.price;
            const subtotal = item.price * item.cantidad;
            return {id, title, price, subtotal}
        })

        const db = getFirestore()

        db.collection('orders').add(order)
        .then(res => setOrderId(res.id))
        .catch (error => alert("Error:", error))
        .finally(()=>deleteCart())


        const updateStock = db.collection("items").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.id))

       //batch
        const batch = db.batch();

        updateStock.get()
        .then(res => {
            res.docs.forEach(docSnapshot => {  batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
        
        batch.commit()
        .then (console.log(res))
        .catch (error => alert("Error:", error))
        })
    }
    const handleChange = (e) => {
        setFormData ({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)
    return (
        
        <div className="seccionCart">
             <div>
                 <h2>Mi carrito</h2>
             </div>
            
             <Table className="container-fluid  tablaCompra" hidden={cartList.length > 0 ? false : true}>
                 <thead>
                      <tr className=" text-center">
                         <th>Id del producto</th>
                         <th>Nombre del producto</th>
                         <th>Cantidad</th>
                         <th>Precio</th>
                     </tr>
                 </thead>
  
            <tbody>
               {cartList.map( cartItem => 

               
                          <tr className="p-3 m-2 text-center shadow" key={cartItem.id} >
                             <td><p>{cartItem.id}</p></td>
                             <td> <h5 >{cartItem.title}</h5><img className= "cartItemImg " src={cartItem.img} alt="imagen"/></td>
                             <td><p> {cartItem.cantidad}</p></td>
                            
                             <td>
                                 <p>$ {cartItem.price}</p>
                                 <p onClick={() => deleteItem(cartItem.id)}> <img src='../pictures/imagenes/delete.png' className="deleteIcon" alt="delete" width= "32px"/>
                                   
                                 </p>
                                 <p> Subtotal: $ {cartItem.price * cartItem.cantidad}</p>
                             </td>  
                         </tr>)} 
             </tbody>
                            
               
             </Table>       
            
                {cartList.length
            ? <div>
                 <Button variant="warning" onClick={() => deleteCart()}>Vaciar carrito</Button>
                 <p className="totalPrice">{`Precio Final: $ ${totalPrice()} `}</p>
             </div> 
            
               : orderId===""
                ? 
             <div>
             
                 <div className="cartVacio">
                     <p>No hay productos en tu carrito de compras</p>
                     <p>Te pedimos que vuelvas a intentarlo ingresando aquí.</p>
                     <Link to="/">
                         <p>Ir al inicio</p>
                     </Link>
                </div>
            </div>
                : 
                <div className="compraExitosa">
                     <p>La operación ha sido exitosa</p>
                     <p>¡Gracias por su compra!</p>
                     <p>Tu código de operación es: {orderId}</p>
                
                </div>
            }
            <div className=
                {cartList.length ? "filled-cart"  : "not-filled-cart" } > 
           

            <form onSubmit={generateOrder} onChange={handleChange}>
                    <legend className="form-legend">Ingresá tus datos</legend>
                    <div>
                    <hr/>
                        <label htmlFor="name" className="form-label formSpace"></label>
                        <input type="text" required name="nombre" placeholder="Nombre" defaultValue={formData.nombre}/>
                    </div>
                    <div>
                        <label htmlFor="surname" className="form-label formSpace"></label>
                        <input type="text" required name="apellido" placeholder="Apellido" defaultValue={formData.apellido}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label formSpace"></label>
                        <input type="text" required name="telefono" placeholder="Teléfono" defaultValue={formData.telefono}/> 
                        <p>Ingresá tu número de celular con el código de área, sin el 0 ni el 15.</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label formSpace"></label>
                        <input type="email" required name="email" placeholder="Email" defaultValue={formData.email}/>
                    </div>
                    <button className="buttonGrey">COMPRAR</button>
                </form>

        </div>
        </div>
        
    )}
          
export default Cart

