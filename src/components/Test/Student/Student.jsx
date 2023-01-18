import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { userProfile } from "../../../common/data";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../Common/Breadcrumb";
import { map } from "lodash";
import MiniCards from "./mini-card";
import { myTasks2, statusClasses } from "../../../common/data/tasks";
import { Link } from "react-router-dom";
import { pathRoutes } from "../../../constants/pathRoutes";
import classNames from "classnames";
import { AvField, AvForm } from "availity-reactstrap-validation";

const Student = () => {
  const miniCards = [
    {
      title: "Completed Tasks",
      iconClass: "bx-check-circle",
      text: "125",
    },
    { title: "Uncompleted Tasks", iconClass: "bx-hourglass", text: "12" },
  ];
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="page-content">
        <MetaTags>
          <title>Student | Read Plus</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Student" breadcrumbItem="Student" />

          <Row>
            <Col xs={4}>
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">
                        Personal Information
                      </CardTitle>
                      <p className="text-muted mb-4">
                        {userProfile.personalDetail}
                      </p>
                      <div className="table-responsive">
                        <Table className="table-nowrap mb-0">
                          <tbody>
                            <tr>
                              <th scope="row">Full Name :</th>
                              <td>{userProfile.name}</td>
                            </tr>
                            <tr>
                              <th scope="row">Mobile :</th>
                              <td>{userProfile.phone}</td>
                            </tr>
                            <tr>
                              <th scope="row">E-mail :</th>
                              <td>{userProfile.email}</td>
                            </tr>
                            <tr>
                              <th scope="row">Location :</th>
                              <td>{userProfile.location}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Row>
                    {map(miniCards, (card, key) => (
                      <MiniCards
                        title={card.title}
                        text={card.text}
                        iconClass={card.iconClass}
                        key={"_card_" + key}
                      />
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col xl={8}>
              {map(myTasks2, (task, i) => (
                <Card key={i} style={{ height: `calc(100% - 24px)` }}>
                  <CardBody>
                    <CardTitle className="mb-4">Students tasks</CardTitle>

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
                              <td>
                                <Link
                                  onClick={toggle}
                                  to="#"
                                  className="btn btn-primary btn-sm"
                                >
                                  Check
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          {"Check task"}
        </ModalHeader>
        <ModalBody>
          <AvForm>
            <Row form>
              <Col xs={12}>
                <div className="mb-3">
                  <AvField
                    name="name"
                    label="Name"
                    type="text"
                    errorMessage="Invalid name"
                    validate={{
                      required: { value: true },
                    }}
                    value={""}
                  />
                </div>
                <div className="mb-3">
                  <AvField
                    name="designation"
                    label="Designation"
                    type="text"
                    errorMessage="Invalid Designation"
                    validate={{
                      required: { value: true },
                    }}
                    value={""}
                  />
                </div>
                <div className="mb-3">
                  <AvField
                    name="email"
                    label="Email"
                    type="email"
                    errorMessage="Invalid Email"
                    validate={{
                      required: { value: true },
                    }}
                    value={""}
                  />
                </div>
                <div className="mb-3">
                  <AvField
                    type="select"
                    name="tags"
                    className="form-select"
                    label="Option"
                    helpMessage="MULTIPLE!"
                    multiple={true}
                    required
                    value={""}
                  >
                    <option>Photoshop</option>
                    <option>illustrator</option>
                    <option>Html</option>
                    <option>Php</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>UI/UX Designer</option>
                    <option>Ruby</option>
                    <option>Css</option>
                  </AvField>
                </div>
                <div className="mb-3">
                  <AvField
                    name="projects"
                    label="Projects"
                    type="text"
                    errorMessage="Invalid Projects"
                    validate={{
                      required: { value: true },
                    }}
                    value={""}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </AvForm>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Student;
