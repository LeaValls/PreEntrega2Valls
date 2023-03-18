import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({product}) {
    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="bottom" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="dark"><Link style={{ textDecoration: "none", color: "white" }} to ={'/item/${product.id}'}>Ves Mas</Link></Button>
          </Card.Body>
        </Card>
      )
  }
  
  export default Item;