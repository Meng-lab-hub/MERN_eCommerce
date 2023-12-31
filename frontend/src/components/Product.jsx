import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

// Link can eliminate the page reload of each website

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// For Card title, we use className='product-title' to make sure every single product card has the same size. 
// This is to prevent a case where the name of the product is too long which will also make the product card longer than others as well.

// <a></a>: used to insert a link

// /product/${product._id} : this is the way to create a dynamic link for each product. for example you click on product 1, it will bring you to the link /product/1
export default Product;
