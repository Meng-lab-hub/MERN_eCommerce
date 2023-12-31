import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  // Navbar: a menu bar on top of the webpage
  //    bg:
  //    variant:
  //    expand = [lg, md]: there will be a hamberger button when the screen is small e.g mobile phone screen
  //    collapseOnSelect: when select an option, a menu should collapse
  // Navbar.Brand: a brand name on the menu bar with a clickable link
  // Navbar.Toggle: a hamberger button which will appear when a screen is small like mobile phone
  // Navbar.Collapse: a list of collapsetable item on the hamberger button
  //    ms-auto: list appears on the right
  //    me-auto: list appears on the left

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="ProShop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart /> Cart
                </NavLink>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavLink>
                  <FaUser /> Sign
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
