import Card from 'react-bootstrap/Card'

import ItemCount from './ItemCount'



const Item = ({prod}) => {
return (<div  className=" card w-50 mt-5">
                            <Card style={{ width: "18rem" }}>
                              <Card.Img variant="top" src={prod.img} />
                              <Card.Body>
                              <Card.Title>{prod.title}</Card.Title>
                              <Card.Text>
                               {prod.description}
                               {prod.price}
                               <ItemCount  stock={10} initial={1} />
                              </Card.Text>
                             
                             </Card.Body>
                            </Card>



</div>)
}
export default Item

