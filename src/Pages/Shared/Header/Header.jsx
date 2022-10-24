import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHome, FaUser, FaUserAlt, FaUsers } from "react-icons/fa";
import {BiLogIn,} from "react-icons/bi";
import {FiLogOut,} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
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
          <Nav className='mx-auto '>
            <NavLink to='/' className="me-4"><FaHome/>Home</NavLink>
            <NavLink to='/login' className="me-4"><FaUserAlt/>Login</NavLink>
            <NavLink to='/register' className="me-4"><FaUsers/>Register</NavLink>
          </Nav>
          <div className="d-flex justify-content-end text-white gap-3">
              <Nav.Link href='#pricing'>
                {
                  user? user.displayName : null
              }
              {
                user? <FiLogOut className="fs-3"></FiLogOut> : <BiLogIn className="fs-3"></BiLogIn>
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
