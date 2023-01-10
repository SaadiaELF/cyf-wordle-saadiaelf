import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="faded" light fixed>
        <NavbarBrand href="/" className="m-auto">
          <h1>Wordle</h1>
        </NavbarBrand>
        <Nav className="justify-content-end me-2" navbar>
          <NavItem>
            <Button>Score</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
