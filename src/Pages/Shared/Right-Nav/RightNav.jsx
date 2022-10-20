import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaRetweet,
  FaYoutube,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Contexts/AuthProvider/Authprovider";
import { GoogleAuthProvider } from "firebase/auth";

const RightNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handelGoogleSignIn}
          variant='outline-primary'
          className='mb-2'
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button variant='outline-dark'>
          <BsGithub /> Login With GitHub
        </Button>
      </ButtonGroup>
      <div className='mb-2 mt-5'>
        <h5>Find Us On:</h5>
        <ListGroup>
          <ListGroup.Item className='mb-3'>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className='mb-3'>
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className='mb-3'>
            <FaRetweet /> Tweeter
          </ListGroup.Item>
          <ListGroup.Item className='mb-3'>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightNav;
