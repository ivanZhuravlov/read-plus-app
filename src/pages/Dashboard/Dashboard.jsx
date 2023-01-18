import { useEffect } from "react";
import PropTypes from "prop-types";
import React from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { withTranslation } from "react-i18next";
import classNames from "classnames";
import { map, size } from "lodash";

import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import TopCities from "../../components/TopCities/TopCities";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Statistics from "../../components/Statistics/Statistics";
import TasksBlock from "../../components/Tasks/Tasks";
import StudentsList from "../../components/StudentsList/StudentsList";

import { getCurrentRoute } from "../../helpers/metaTagsHelper";

import images from "../../assets/images";
import { myTasks, statusClasses } from "common/data/tasks";
<<<<<<< HEAD
import { pathRoutes } from "../../constants/pathRoutes";
=======
import getTasksList from "../../api/firebase.api";
>>>>>>> 4405b5d... firebase and tasks logic added

const Dashboard = props => {
  const history = useHistory();

  // useEffect(() => {
  //   getTasksList(724148636);
  // }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{getCurrentRoute("private", history).metaData.tag}</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />

          <Row>
            <Col xl="3">
              <WelcomeComp />
              <TopCities />
            </Col>

            <Col xl="3">
              <WelcomeComp />
              <TopCities />
            </Col>

            <Col xl="6">
              <TasksBlock />
            </Col>

            {/* <Col xl={6}>
              {map(myTasks, (task, i) => (
                <Card key={i} style={{ height: `calc(100% - 24px)` }}>
                  <CardBody>
                    <CardTitle className="mb-4">{task.title}</CardTitle>

                    <div className="table-responsive">
                      <table className="table table-nowrap align-middle mb-0">
                        <tbody>
                          {map(task.tasks, (item, i) => (
                            <tr key={i}>
                              <td style={{ width: "40px" }}>
                                <div className="form-check font-size-16">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={item.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={item.id}
                                  />
                                </div>
                              </td>
                              <td>
                                <Link
                                  to={pathRoutes.SCHOOL_CLASSES_SINGLE_TASKS}
                                  className="text-dark"
                                >
                                  <h5 className="text-truncate font-size-14 m-0">
                                    {item.description}
                                  </h5>
                                </Link>
                              </td>
                              <td>
                                <div className="team">
                                  {map(
                                    item.members,
                                    (member, index) =>
                                      index < 2 && (
                                        <Link
                                          to="#"
                                          className="team-member d-inline-block me-1"
                                          key={index}
                                        >
                                          {member.userImg ? (
                                            <img
                                              src={images[member.userImg]}
                                              className="rounded-circle avatar-xs"
                                              alt=""
                                            />
                                          ) : (
                                            <div className="avatar-xs">
                                              <span className="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16">
                                                {member.username.charAt(0)}
                                              </span>
                                            </div>
                                          )}
                                        </Link>
                                      )
                                  )}
                                  {size(item.members) > 2 && (
                                    <Link
                                      to="#"
                                      className="d-inline-block me-1"
                                    >
                                      <div className="avatar-xs">
                                        <span className="avatar-title rounded-circle bg-warning text-white font-size-16">
                                          {size(item.members) - 2} +
                                        </span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </td>
                              <td>
                                <div className="text-center">
                                  <span
                                    className={classNames(
                                      "badge badge-pill font-size-11",
                                      statusClasses[item.status.toLowerCase()]
                                    )}
                                  >
                                    {item.status}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Col> */}
          </Row>

          <Row>
            <Col lg="12">
              <StudentsList />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
