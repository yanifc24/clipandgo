
import React, { useState } from 'react';
import Button from'react-bootstrap/Button';
import InputGroup from'react-bootstrap/InputGroup';
import FormControl from'react-bootstrap/FormControl';
import {Link}from 'react-router-dom';
import Swal from 'sweetalert2';
import 'animate.css';

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
             title: `Has agregado ${count} producto/s a tu compra `,
             icon: 'success',
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
            <InputGroup className="mb-3 marginCount" style={{ width: '9rem' }}>
                <button className="buttonControl pink"  onClick = {subtraction} disabled={count<1} > - </button> 
                <FormControl className="text-center" aria-label="Example text with two button addons" value={count} onChange={e => setCount(e.target.value)} />
                <button className="buttonControl pink"  onClick = {addition} disabled={count>=stock} > + </button>
            </InputGroup>
      
             {changeButtom ?
              <div className="bodyStyle">
                <div>
                 <Link to="/cart" >
                         <Button className="btnComprar" variant="dark" size="m">COMPRAR</Button>
                  </Link>
                </div>
                <div>
                     <Link to='/'>
                        <Button variant="secondary" size="sm">SEGUIR COMPRANDO</Button>
                    </Link>
                 </div>
                 </div>
                   :
                 <div>
                     <button className= "addPink" onClick={onAddHandler}>Agregar al carrito</button>
                </div> 
                 
                    }   
        </div>
    )
}

export default ItemCount 
