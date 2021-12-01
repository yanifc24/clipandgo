
import React, { useState } from 'react';
import Button from'react-bootstrap/Button';
import InputGroup from'react-bootstrap/InputGroup';
import FormControl from'react-bootstrap/FormControl';
import {Link}from 'react-router-dom'
import Swal from 'sweetalert2';



function ItemCount({stock,initial,onAdd}) {
    const [count,setCount] = useState (initial);
    const [changeButtom,setChangeButtom] = useState (false);

    const addition =() => {
        if (count < stock) {setCount(count +1) }
    }
    
    const subtraction =() =>{
        if (count > 1) {setCount(count -1) }
    }
    
    const onAddHandler = () => {
        onAdd (count)
        setCount (initial)
        Swal.fire({
            title: `Has agregado ${count} producto/s al carrito `,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
         ;
         setChangeButtom(true);
        } 

    return (
        <div>
            <InputGroup className="mb-3" style={{ width: '9rem' }}>
                <button className="buttonControl rosa"  onClick = {subtraction} disabled={count<1} > - </button> 
                <FormControl className="text-center" aria-label="Example text with two button addons" value={count}/>
                <button className="buttonControl rosa"  onClick = {addition} disabled={count>=stock} > + </button>
            </InputGroup>

             {changeButtom ?
              <div className="bodyStyle" >
                 <Link to="/cart" >
                 <Button className="btnComprar" variant="dark" size="m">COMPRAR</Button>
                  </Link>
                  <p><Link to='/'>
                        <Button variant="secondary" size="sm">SEGUIR COMPRANDO</Button>
                  </Link>
                 </p>
               </div>
                 :
                 <div >
                     <button className= "rosaAgregar"  onClick={onAddHandler}>Agregar al carrito</button>
                </div>
                    
               
               
                    }
               
             
            
            
        </div>
    )
}

export default ItemCount 
