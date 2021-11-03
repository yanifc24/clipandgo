import React from 'react'
import ItemDetail from './ItemDetail'
import { useState,useEffect } from 'react'
import GetFetchUnit from '../GetFetchUnit'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [prod,setProd] = useState ({})
    
    const {id} = useParams()
     
    useEffect(() => {
        GetFetchUnit
        .then(res => {setProd(res.find(prod => prod.id === parseInt(id) ))
        
         })
        .catch (error => alert("Esto es un error:", error))
    },[id])  
    return (
        <div>
            <ItemDetail prod = {prod} />
        </div>
    )
}

export default ItemDetailContainer

