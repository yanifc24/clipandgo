import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const Item = ({prod}) => {

return (<div  className=" styleCard">
                            <Card style={{ width: "15rem" }}>
                            <Card.Img variant="top"  src={prod.img} />
                                 <Card.Body>
                                     <h4 className="bodyStyle">{prod.id}</h4>
                                     <h4 className="bodyStyle"><Card.Title> {prod.title}</Card.Title></h4> 
                                     <Card.Text>
                                         <p className="priceStyle">${prod.price}</p> 
                                         <Button className="buttonInfo" variant="outline-info">Ver más</Button>
                                     </Card.Text>
                                  </Card.Body>
                              
                             </Card>

         </div>)
}
export default Item

