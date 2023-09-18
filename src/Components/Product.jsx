import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { getProducts } from "../Store/ProductSlice";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
    NotificationManager.success(`Successfuly added ${product.title} added to cart!`);
  };

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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
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

export default Product;
