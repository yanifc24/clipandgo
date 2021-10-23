
import React, { useState } from 'react';
import Button from'react-bootstrap/Button';
import InputGroup from'react-bootstrap/InputGroup';
import FormControl from'react-bootstrap/FormControl';

function ItemCount({stock,initial,onAdd}) {
    const [count,setCount] = useState (initial);

    const agregar =() => {
        if (count < stock) {setCount(count +1) }
    }
    
    const descontar =() =>{
        if (count > 1) {setCount(count -1) }
    }
    

    return (
        <div>
            
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick = {descontar}> - </Button> 
                <FormControl className="text-center" aria-label="Example text with two button addons" value={count}/>
                <Button variant="outline-primary" onClick = {agregar}> + </Button>
            </InputGroup>
            <Button variant="primary" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
            
        </div>
    )
}

export default ItemCount 
