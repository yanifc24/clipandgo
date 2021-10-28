import Card from 'react-bootstrap/Card'

import ItemCount from './ItemCount'



const Item = ({prod}) => {
const agregarCarrito =(final) => {alert(`La cantidad que has agregado es: ${final} ` ) }  
  

return (<div  className=" styleCard">
                            <Card style={{ width: "15rem" }}>
                            <Card.Img variant="top"  src={prod.img} />
                                 <Card.Body>
                                     <h4 className="titleStyle"><Card.Title> {prod.title}</Card.Title></h4> 
                                     <Card.Text>
                                         {prod.description}
                                         <p className="priceStyle">${prod.price}</p> 
                                         <p className="carritoStyle"><ItemCount  stock={10} initial={1}  onAdd={agregarCarrito}/></p>
                                     </Card.Text>
                             
                                  </Card.Body>
                              
                                
                             </Card>



         </div>)
}
export default Item

