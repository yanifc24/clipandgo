import React from 'react';
import ItemDetail from './ItemDetail';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore';

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
      
    },[id])  
    
    return (
        <div>
            {loading
                ? 
                <div className="locationSpinner">
                    <div className="loadingio-spinner-pulse-ktrp39q1bi"><div className="ldio-jh9967c90a">
                    <div></div><div></div><div></div>
                    </div></div>
                </div>
                :
            <ItemDetail  prod = {prod} />}
        </div>
    )
}

export default ItemDetailContainer

