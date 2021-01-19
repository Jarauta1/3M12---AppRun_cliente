/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/


// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.github.com/Jarauta1">
              GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/diego-jarauta-ib%C3%A1%C3%B1ez-791551140/">
              LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://bbkbootcamp.com/">
              BBK Bootcamp
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} hecho con {" "}
          <i className="tim-icons icon-heart-2" /> por {" "}
          <a
            href=""
            target="_blank"
          >
            DJarauta
          </a>{" "}
          , gracias a Ander y el aporte de mis compañeros.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
