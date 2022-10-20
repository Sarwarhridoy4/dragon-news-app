import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/Authprovider";
import Image from 'react-bootstrap/Image'

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Mini-News</Link>
          </Navbar.Brand>
          <Nav className='mx-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-end text-white gap-3">
              <Nav.Link href='#pricing'>
                {
                  user? user.displayName : null
                }
              </Nav.Link>
              <Nav.Link href='#pricing'>
              {
                user ? <Image fluid roundedCircle width='35px' src={user.photoURL} />: <FaUser className="ms-3"></FaUser>
                }
              </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
