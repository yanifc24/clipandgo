import ItemList from './ItemList';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

 function ItemListContainer() {
   
   const [product,setProduct] = useState ([])
   const {idCategory} = useParams()
   const [loading, setLoading] = useState(true);
  
   useEffect(() => {
    const db = getFirestore() 
    const dbQuery = idCategory ? db.collection("items").where("category", "==",idCategory ) : db.collection("items")
    dbQuery.get()

        .then(response => setProduct(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
        .catch (error => alert("Error:", error))
         setTimeout(() => { setLoading (false) }, 2000);

    } ,[idCategory])

  return (
    <Row className="mx-0" >
       <Col className="mt-5 text-center" >
           <h1 className="catalogo">Bienvenidos</h1>  
           <h2 className="catalogo">Nuestros productos</h2> 
           <div className="locationSpinner">
           {loading
                ?   
                <div className="loadingio-spinner-pulse-ktrp39q1bi"><div className="ldio-jh9967c90a">
                <div></div><div></div><div></div>
                </div></div>
                :     
             <ItemList product={product}/>
               }
            </div>
       </Col>
    </Row>
  )
}
export default ItemListContainer







   

