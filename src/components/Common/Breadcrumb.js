import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";

const BreadcrumbComponent = props => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box align-items-center ">
          <div className="page-title-right">
            <Breadcrumb className="breadcrumb m-0">
              <BreadcrumbItem>
                <a href="/">ROOT</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.breadcrumbItem}</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
        </div>
      </Col>
    </Row>
  );
};

BreadcrumbComponent.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
};

export default BreadcrumbComponent;
