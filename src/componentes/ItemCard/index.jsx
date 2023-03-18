import Card from 'react-bootstrap/Card';

function ItemCard (product){

return (

<Card>
<Card.Img variant="top" src= {product.image}/>
<Card.Body>
  <Card.Text>{product.description}</Card.Text>
</Card.Body>
</Card>
)
};

export default ItemCard;