import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id,title) => {
    dispatch(remove(id));
    NotificationManager.error(`Removed ${title} from cart!`,1000);
  };

  if (products.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  const cards = products.map((product) => (
    <div className="col-md-3 m-1" key={product.id}>
      <Card style={{ width: "18rem", textAlign: "center" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          {" "}
          <Button variant="danger" onClick={() => removeItem(product.id, product.title)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
      <NotificationContainer />
    </>
  );
};

export default Cart;
