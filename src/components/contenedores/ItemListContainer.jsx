

import ItemList from './ItemList'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../services/getFirestore'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

 function ItemListContainer({greeting}) {
   
   const [product,setProduct] = useState ([])
   const {idCategoria} = useParams()
   const [loading, setLoading] = useState(true);
  

   useEffect(() => {
    const db = getFirestore() 
        
    if (idCategoria) {

        const byCategory= db.collection("items").where("category", "==",idCategoria ).get()

        byCategory
        .then(response => setProduct(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
        .catch (error => alert("Error:", error))
       
    }

    else {

        const totalData = db.collection("items").orderBy("category").get()

        totalData
        .then(response => setProduct(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
        .catch (error => alert("Error:", error))
        
    }

    setTimeout(() => { setLoading (false) }, 2000);

   },[idCategoria])
 
  return (
    <Row className="mx-0" >
    <Col  className="mt-5 text-center" >
      <div className="locationContainer" >
 
         <h1 className="catalogo">{greeting}</h1> 
         <div className="locationSpinner">
           {loading
                ?   
                <div class="loadingio-spinner-pulse-ktrp39q1bi"><div class="ldio-jh9967c90a">
                <div></div><div></div><div></div>
                </div></div>
               
                :
                
         <ItemList product={product}/>
       }
        
        </div>
    </div>
    </Col>
    </Row>
  )
}
export default ItemListContainer







   

