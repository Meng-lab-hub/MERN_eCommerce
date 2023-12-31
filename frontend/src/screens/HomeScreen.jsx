import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
// This is a Home screen page

const HomeScreen = () => {
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
