import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftNav from "../Pages/Shared/Left-Nav/LeftNav"
import RightNav from "../Pages/Shared/Right-Nav/RightNav"
import Header from "../Pages/Shared/Header/Header"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg='2'>
            <LeftNav></LeftNav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
