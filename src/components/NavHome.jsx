import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap";
import "./navhome.scss";

const NavHome = () => {
    return (
      <Navbar id="nav">
        <Navbar.Brand id="main-title">REACTMOVIES</Navbar.Brand>
        <Button id="main-button" href="https://github.com/hsravo/reactmovies" target="_blank">
          ABOUT
        </Button>
      </Navbar>
    )
}

export default NavHome;