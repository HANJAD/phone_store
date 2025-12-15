import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCart } from '../context/CartContext';

function CardItem({product}) {
  const {addToCart} = useCart();

  return (
    <>
        <Card style={{ width: '18rem' }} className='my-3'>
          <Card.Img variant="top" src={product.product_image} alt={product.name} style={{height: '18rem', width: '100%'}} className='object-fit-cover'/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.desc}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className='text-decoration-line-through'>{product.initial_price.toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}</ListGroup.Item>
            <ListGroup.Item>{product.selling_price.toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link onClick={() => addToCart(product)} className='btn btn-primary'>Add to cart</Card.Link>
            <Card.Text className='btn btn-dark ms-3 disabled'>{product.brand}</Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default CardItem;