import { Table } from "react-bootstrap";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total: sum of (selling_price * quantity)
  const total = cart.reduce((acc, item) => acc + item.selling_price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="text-center mt-5">
          <h2>Your cart is empty</h2>
          <Link to="/" className="btn btn-primary mt-3">Go Shopping</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Your Shopping Cart</h1>
        <Table>
          <thead>
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
                <td>
                  <img src={item.product_image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  {item.name}
                </td>
                <td>{item.selling_price}</td>
                <td>{item.quantity}</td>
                <td>{(item.selling_price * item.quantity).toLocaleString('en-Ng', {style: 'currency', currency: 'NGN'})}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-outline-secondary" onClick={clearCart}>Clear Cart</button>
          <div className="d-flex">
            <h4>Total: {total.toLocaleString('en-Ng', {style: 'currency', currency: 'NGN'})}</h4>
            <button className="btn btn-success ms-3">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;