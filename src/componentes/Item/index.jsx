import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

function Item({product}) {

  
    return (
          <Card style={{ width: "18rem" }}>
          <NavLink to ={`/item/${product.id}`}style={{ textDecoration: "none", color: "black" }}><Card.Img variant="bottom" src={product.image} /></NavLink>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <NavLink to ={`/item/${product.id}`}style={{ textDecoration: "none", color: "black" }}><Button variant="dark">Ves Mas</Button></NavLink>
          </Card.Body>
        </Card>
      )
  }
  
  export default Item;