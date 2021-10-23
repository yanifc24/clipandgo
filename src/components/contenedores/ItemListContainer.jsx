
import ItemCount from  './ItemCount'
import Card from 'react-bootstrap/Card'


 function ItemListContainer({greeting}) {
   const agregarCarrito = (final) => {alert(`La cantidad que has agregado es: ${final} ` ) } 

    return (
      <div>
           <h1>{greeting}</h1>
           <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                 <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                   </Card.Text>
   
                     <ItemCount stock={10} initial={1} onAdd={agregarCarrito} />
                  </Card.Body>
            </Card>
           
      </div>
    )
  }
  export default ItemListContainer

