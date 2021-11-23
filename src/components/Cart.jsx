
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
                 <h2 >Mi carrito</h2>
             </div>
             {cartList.length ? 
             <Table>
                 <thead >
                      <tr className= "text-center">
                         <th>Id del producto</th>
                         <th>Nombre del producto</th>
                         <th>Descripición</th>
                         <th>Cantidad</th>
                         <th >Precio</th>
                     </tr>
                 </thead>
             </Table> 
              
              :
             <div>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
                
             </div>}      
               
            {cartList.map(
                cartItem => 
            
                 <div key={cartItem.id} >
                
                  <Table>     
                      <tbody >
                         <tr className="p-3 m-3 text-center shadow">
                             <td><p>{cartItem.id}</p></td>
                             <td> <h5 >{cartItem.title}</h5><img className= "cartItemImg" src={cartItem.img} alt="imagen"/></td>
                             <td><p>{cartItem.description}</p></td>
                             <td><p>{cartItem.cantidad}</p></td>
                             <td>
                                 <p>$ {cartItem.price}</p>
                                 <p onClick={() => deleteItem(cartItem.id)}><img src='../pictures/imagenes/delete.png'  alt="delete" width= "32px"/>
                                 </p>
                                 <p> Subtotal: $ {cartItem.price * cartItem.cantidad}</p>
                             </td> 
                         </tr>
                       </tbody>
                 </Table>       
                    
                </div> )} 
                

            
                {cartList.length
            ? <div>
               <Button variant="warning" onClick={() => deleteCart()}>Vaciar carrito</Button>
                <p className="totalPrice">{`Precio Final: $ ${totalPrice()} `}</p>
             </div> 
            
            : orderId===""
                ? <div>
             
                
                </div>
                : <div>
                <p>La operación ha sido exitosa</p>
                <p >¡Gracias por su compra!</p>
                <p>Tu código de operación es: {orderId}</p>
                
                </div>
            }
            <div className=
                {cartList.length
                ? "filled-cart"
                : "not-filled-cart" } > 
           

            <form onSubmit={generateOrder} onChange={handleChange}>
                    <legend className="form-legend">Ingresá tus datos</legend>
                    <div>
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" name="nombre" placeholder="Juan" defaultValue={formData.nombre}/>
                    </div>
                    <div>
                        <label htmlFor="surname" className="form-label">Apellido</label>
                        <input type="text" name="apellido" placeholder="Pérez" defaultValue={formData.apellido}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="text" name="telefono" placeholder="3492123456" defaultValue={formData.telefono}/> 
                        <p>Ingresá tu número de celular con el código de área, sin el 0 ni el 15.</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" placeholder="ejemplo@tuemail.com" defaultValue={formData.email}/>
                    </div>
                    <button>COMPRAR</button>
                </form>

        </div>
        </div>
        
    )}
          
export default Cart

