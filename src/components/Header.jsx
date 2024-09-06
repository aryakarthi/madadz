import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Header() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor("#0c0e0c");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <Container className="fixed-header">
          <Navbar.Brand
            href="#home"
            style={{
              color: "white",
              fontSize: "30px",
              fontFamily: "kreadon-extrabold",
            }}
            className="navbar-content nav-bar-section"
          >
            <img src="img/Madlogo4.png" alt="" width={"80px"} />
            
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: "white",
              filter: "invert(1)",
              background: "transparent",
              border: "none", 
              outline: "none", 
              boxShadow: "none", 
            }}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ background: "black" }}
          >
            <Offcanvas.Header closeButton style={{ filter: "invert(1)" }}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" style={{ color: "white" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  Services
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  About
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  Our Works
                </Nav.Link>
                <Nav.Link href="#footer" style={{ color: "white" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
