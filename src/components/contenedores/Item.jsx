import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
   
return (<div  className="styleCard">
                            <Card  className="formaCard"   >
                               <Card.Img variant="top" src={prod.img} />
                                 <Card.Body>
                                        <h4 hidden className="bodyStyle">{prod.category}</h4>
                                        <h4 className="bodyStyle"><Card.Title> {prod.title}</Card.Title></h4> 
                                        <h4 hidden className="idStyle">id : {prod.id}</h4> 
                                     {prod.stock < 1 ? 
                                        <p className="bodyStyle  noStock"> Producto Sin Stock </p>
                                     
                                              :
                                        <p className="bodyStyle">{prod.stock} productos disponibles </p> 
                                       }
                                       <Card.Text>
                                             <p className="priceStyle">${prod.price}</p> 
                                             <Link as= {Link} to={`/detalle/${prod.id}` } >
                                                 <Button className="buttonInfo" hidden={prod.stock < 1} variant="secondary">Ver más</Button>
                                              </Link>
                                        
                                        </Card.Text>
                                  </Card.Body>
                              
                              </Card>
                             
         </div>)
}
export default Item

