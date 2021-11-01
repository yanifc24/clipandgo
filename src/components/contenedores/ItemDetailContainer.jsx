import React from 'react'
import ItemDetail from './ItemDetail'
import { useState,useEffect } from 'react'
import GetFetchUnit from '../GetFetchUnit'

const ItemDetailContainer = () => {
    const [prod,setProd] = useState ({})
    
    useEffect(() => {
    GetFetchUnit
    
    .then (res => { setProd(res.find(prod=> prod.id ===1))})
    .catch(err=> console.log (err))
    .finally ( ()  => console.log("si"))

   })
     console.log (prod)
    return (
        <div>
            <ItemDetail prod = {prod} />
        </div>
    )
}

export default ItemDetailContainer

