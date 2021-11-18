import React from 'react'
import ItemDetail from './ItemDetail'
import { useState,useEffect } from 'react'
// import GetFetchUnit from '../GetFetchUnit'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../services/getFirestore'

const ItemDetailContainer = () => {
    const [prod,setProd] = useState ({})
    const [loading, setLoading] = useState(true);

    const {id} = useParams()
    useEffect(() => {

     const db = getFirestore()
     const dbQuery= db.collection('items').doc(id).get()

     dbQuery
     .then(resp=>setProd ({id:resp.id, ...resp.data()}))
     
     .catch (error => alert("Esto es un error:", error))

        setTimeout(() => { setLoading (false)
        }, 2000);
      /*   GetFetchUnit
        .then(res => {setProd(res.find(prod => prod.id === parseInt(id) ))
        
         })
        .catch (error => alert("Esto es un error:", error)) */
    },[id])  
    console.log (prod)
    return (
        <div>
            {loading
                ? <h2 >Cargando...</h2>
                :
            <ItemDetail prod = {prod} />
}
        </div>
    )
}

export default ItemDetailContainer

