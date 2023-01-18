import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import {
  Badge,
  Card,
  CardBody,
  Col,
  Media,
  UncontrolledTooltip,
} from "reactstrap";
import companies from "assets/images/companies";

import { project1 } from "../../../common/data";

const CardProject = () => {
  return (
    <React.Fragment>
      {map(project1, (project, key) => (
        <Col xs={12} xl={7} key={key}>
          <Card>
            <CardBody>
              <Media>
                <div className="avatar-md me-4">
                  <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    <img src={companies[project.img]} alt="" height="30" />
                  </span>
                </div>

                <Media className="overflow-hidden" body>
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">{project.description}</p>

                  <p className="text-muted mb-4">Some Audio</p>
                  <p className="text-muted mb-4">Some File</p>
                  <p className="text-muted mb-4">Some Create Data</p>
                </Media>
              </Media>
            </CardBody>

            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Badge className={"bg-" + project.color}>
                    {project.status}
                  </Badge>
                </li>
                <li className="list-inline-item me-3" id="dueDate">
                  <i className="bx bx-calendar me-1" /> {project.dueDate}
                  <UncontrolledTooltip placement="top" target="dueDate">
                    Due Date
                  </UncontrolledTooltip>
                </li>
                <li className="list-inline-item me-3" id="comments">
                  <i className="bx bx-comment-dots me-1" />{" "}
                  {project.commentsCount}
                  <UncontrolledTooltip placement="top" target="comments">
                    Comments
                  </UncontrolledTooltip>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

CardProject.propTypes = {
  projects: PropTypes.array,
};

export default CardProject;
