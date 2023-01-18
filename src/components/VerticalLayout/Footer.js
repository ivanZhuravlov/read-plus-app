import React from "react";
import { Col, Container, Row } from "reactstrap";

import { ReactComponent as LotemXLogo } from "../../assets/images/logo/logo_lotemx.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Read Plus</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                <span>Develop by</span>
                <LotemXLogo style={{ width: "22px", margin: "0 10px" }} />
                <span>LotemX</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
