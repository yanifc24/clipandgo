
import React, { useState } from 'react';
import Button from'react-bootstrap/Button';
import InputGroup from'react-bootstrap/InputGroup';
import FormControl from'react-bootstrap/FormControl';
import {Link}from 'react-router-dom'

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
         alert(`La cantidad agregada es : ${count} `);
         setChangeButtom(true);
        } 

    return (
        <div>
            
            <InputGroup className="mb-3" style={{ width: '9rem' }}>
                <Button className="buttonControl" variant="outline-primary" onClick = {subtraction}  > - </Button> 
                <FormControl className="text-center" aria-label="Example text with two button addons" value={count}/>
                <Button className="buttonControl" variant="outline-primary" onClick = {addition} > + </Button>
            </InputGroup>

             {changeButtom ?
             <Link to="/cart" >
                <Button variant="primary" >Finalizar compra</Button>
             </Link> 
             
                 :
             <Button variant="primary" onClick={onAddHandler}>Agregar al carrito</Button> }
            
            
        </div>
    )
}

export default ItemCount 
