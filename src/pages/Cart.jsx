import { Table, Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.selling_price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <Container className="text-center mt-5 py-5">
          <h2 className="display-6">Your cart is empty</h2>
          <Link to="/" className="btn btn-primary mt-3 btn-lg">
            Go Shopping
          </Link>
        </Container>
      </>
    );
  }

  return (
    <div className="pb-5">
      <Header />
      <Container className="mt-5 pt-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1 className="mb-4 text-center">Your Shopping Cart</h1>
            
            {/* Table Responsive prevents the "mushing" effect */}
            <div className="table-responsive shadow-sm bg-white rounded p-3">
              <Table hover className="align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="d-flex align-items-center">
                        <img
                          src={item.product_image}
                          alt={item.name}
                          className="product-img me-3"
                        />
                        <span className="fw-bold">{item.name}</span>
                      </td>
                      <td>₦{item.selling_price.toLocaleString()}</td>
                      <td>{item.quantity}</td>
                      <td className="fw-bold">
                        {(item.selling_price * item.quantity).toLocaleString(
                          "en-NG",
                          { style: "currency", currency: "NGN" }
                        )}
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 p-3 bg-white shadow-sm rounded">
              <Button variant="outline-primary" onClick={clearCart} className="mb-3 mb-md-0">
                Clear Cart
              </Button>
              <div className="d-flex align-items-center">
                <h3 className="mb-0 me-4">
                  Total:{" "}
                  <span className="text-success">
                    {total.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </h3>
                <Button variant="success" size="lg">Checkout</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;