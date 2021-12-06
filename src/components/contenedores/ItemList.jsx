
import React from 'react'
import Item from './Item'

function ItemList({product}) {
    return (
        
        <div>
            {product.map (prod => <Item key={prod.id} prod={prod} />) }
        </div>
    )
}

export default ItemList




