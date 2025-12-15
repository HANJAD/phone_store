import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Badge, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = ({ searchTerm, setSearchTerm}) => {
  const { cart } = useCart();
  const totalItems = cart.length;
  const [Focus, setFocus] = useState(false);
  const focused = {
    boxShadow: "0 0 10px 0.25rem rgba(10, 109, 109, 1)",
    borderColor: "#11ffff",
    outline: "0 none",
  }
  return (
    <Navbar expand="lg" className="bg-black w-auto h-auto mb-5 py-0 fixed-top">
      <Container fluid className="">
        <Navbar.Brand href="#">
          <Image src={Logo} width={110}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-4 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              style={{
                display: "inline-block",
                marginLeft: "20px",
                textDecoration: "none",
                color: "#e9f1eaff",
                fontWeight: 'bolder'
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              style={{
                display: "inline-block",
                marginLeft: "20px",
                textDecoration: "none",
                color: "#e9f1eaff",
                fontWeight: 'bolder'
              }}
            >
              Cart{" "}
              <sup>
                {" "}
                <Badge bg="success">{totalItems}</Badge>
              </sup>
            </Nav.Link>
          </Nav>
          <Form className="d-flex ju">
            <Form.Control
              type="search"
              placeholder="Search"
              style={Focus ? focused : {}}
              onFocus={() => setFocus(true)}
              value={searchTerm}
              onBlur={() => setFocus(false)}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <Button variant="outline-success" className="ms-3 rounded-3">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
