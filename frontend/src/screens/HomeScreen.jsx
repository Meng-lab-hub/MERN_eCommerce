import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import axios from "axios";
import Product from "../components/Product"; // here we just read product from product.js
// This is a Home screen page

const HomeScreen = () => {
  const [products, setProducts] = useState([]); // we have a constant product where we will have it as state, then we will have setProducts as a function to change this variable

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);
  // useEffect: is we put anything on the empty array at the second parameter of useEffect, anything happen to that parameter, useEffect will be run
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// sm: width of the column for small screen
// md: width of the column for medium screen
// lg: width of the column for large screen
// xl: width of the column for extra-large screen

export default HomeScreen;
