import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
   
return (<div  className="styleCard">
                            <Card className="cardForm">
                            <Card.Img className="imgCard" variant="top" src={prod.img} /> 
                                 <Card.Header className="bodyStyle"> <h1 className="fontTitleCard">{prod.title}</h1></Card.Header>
                                 <Card.Body>
                                        <Card.Text hidden className="bodyStyle">{prod.category}</Card.Text>
                                        <Card.Text hidden className="idStyle">id : {prod.id}</Card.Text> 
                                         {prod.stock < 1 ? 
                                        <Card.Text className="bodyStyle  noStock"> Producto Sin Stock </Card.Text>
                                              :
                                        <Card.Text className="bodyStyle">{prod.stock} productos disponibles </Card.Text> 
                                                          }
                                        <Card.Text className="priceStyle"> ${prod.price}</Card.Text>
                                        <Card.Text>
                                              <Link as= {Link} to={`/detalle/${prod.id}` }>
                                                 <Button className="buttonInfo" hidden={prod.stock < 1} variant="secondary">Ver más</Button>
                                              </Link>
                                        </Card.Text> 
                                  </Card.Body>
                              </Card>               
         </div>)
}

export default Item

