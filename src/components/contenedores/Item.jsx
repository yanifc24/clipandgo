import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




const Item = ({prod}) => {
return (<div key= {producto.id} className=" card w-50 mt-5">
                            <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={producto.img} />
                              <Card.Body>
                              <Card.Title>{producto.title}</Card.Title>
                              <Card.Text>
                               {producto.description}
                               {producto.price}
                              </Card.Text>
                              <Button variant="primary">Agregar al carrito</Button>
                             </Card.Body>
                            </Card>



</div>)
}
export default Item


