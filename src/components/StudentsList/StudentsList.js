import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { Button, Card, CardBody, Col, Row, Badge } from "reactstrap";
// import { getOrders as onGetOrders } from "store/actions";

// import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal";

//redux
import { useSelector, useDispatch } from "react-redux";

const StudentsList = props => {
  const dispatch = useDispatch();

  //   const { orders } = useSelector(state => ({
  //     orders: state.ecommerce.orders,
  //   }));

  const orders = [
    {
      badgeclass: "success",
      billingName: "Neal Matthews",
      id: "customCheck2",
      methodIcon: "fa-cc-mastercard",
      orderId: "#SK2540",
      orderdate: "2019-10-08",
      paymentMethod: "Mastercard",
      paymentStatus: "Paid",
      total: "$400",
    },

    {
      badgeclass: "danger",
      billingName: "Jamal Burnett",
      id: "customCheck3",
      methodIcon: "fa-cc-visa",
      orderId: "#SK2541",
      orderdate: "2019-10-07",
      paymentMethod: "Visa",
      paymentStatus: "Chargeback",
      total: "$380",
    },

    {
      badgeclass: "success",
      billingName: "Juan Mitchell",
      id: "customCheck4",
      methodIcon: "fa-cc-paypal",
      orderId: "#SK2542",
      orderdate: "2019-10-06",
      paymentMethod: "Paypal",
      paymentStatus: "Paid",
      total: "$384",
    },

    {
      badgeclass: "success",
      billingName: "Barry Dick",
      id: "customCheck5",
      methodIcon: "fa-cc-mastercard",
      orderId: "#SK2543",
      orderdate: "2019-10-05",
      paymentMethod: "Mastercard",
      paymentStatus: "Paid",
      total: "$412",
    },
  ];

  //   useEffect(() => {
  //     dispatch(onGetOrders());
  //   }, [dispatch]);

  const selectRow = {
    mode: "checkbox",
  };

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  //pagination customization
  const pageOptions = {
    sizePerPage: 6,
    totalSize: orders.length, // replace later with size(orders),
    custom: true,
  };
  const { SearchBar } = Search;

  // const toggleModal = () => {
  //   setModal1(!modal1)
  // }
  const toggleViewModal = () => setModal1(!modal1);

  const EcommerceOrderColumns = toggleModal => [
    {
      dataField: "orderId",
      text: "Order ID",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <Link to="#" className="text-body fw-bold">
          {row.orderId}
        </Link>
      ),
    },
    {
      dataField: "billingName",
      text: "Billing Name",
      sort: true,
    },
    {
      dataField: "orderdate",
      text: "Date",
      sort: true,
    },
    {
      dataField: "total",
      text: "Total",
      sort: true,
    },
    {
      dataField: "paymentStatus",
      text: "Payment Status",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <Badge
          className={"font-size-12 badge-soft-" + row.badgeclass}
          color={row.badgeClass}
          pill
        >
          {row.paymentStatus}
        </Badge>
      ),
    },
    {
      dataField: "paymentMethod",
      isDummyField: true,
      text: "Payment Method",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <>
          <i
            className={
              row.paymentMethod !== "COD"
                ? "fab fa-cc-" + toLowerCase1(row.paymentMethod) + " me-1"
                : "fab fas fa-money-bill-alt me-1"
            }
          />{" "}
          {row.paymentMethod}
        </>
      ),
    },
    {
      dataField: "view",
      isDummyField: true,
      text: "View Details",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: () => (
        <Button
          type="button"
          color="primary"
          className="btn-sm btn-rounded"
          onClick={toggleViewModal}
        >
          View Details
        </Button>
      ),
    },
  ];

  //   useEffect(() => {
  //     if (orders && !orders.length) {
  //       onGetOrders();
  //     }
  //   }, [onGetOrders, orders]);

  // useEffect(() => {
  //   setOrderList(orders);
  // }, [orders]);

  // useEffect(() => {
  //   if (!isEmpty(orders) && !!isEdit) {
  //     setOrderList(orders);
  //     setIsEdit(false);
  //   }
  // }, [orders]);

  const toggle = () => {
    setModal(!modal);
  };

  const toLowerCase1 = str => {
    return str.toLowerCase();
  };

  const defaultSorted = [
    {
      dataField: "orderId",
      order: "desc",
    },
  ];

  return (
    <React.Fragment>
      {/* <EcommerceOrdersModal isOpen={modal1} toggle={toggleViewModal} /> */}
      <Card>
        <CardBody>
          <div className="mb-4 h4 card-title">Students List</div>
          <PaginationProvider
            pagination={paginationFactory(pageOptions)}
            keyField="id"
            columns={EcommerceOrderColumns(toggle)}
            data={orders}
          >
            {({ paginationProps, paginationTableProps }) => (
              <ToolkitProvider
                keyField="id"
                data={orders}
                columns={EcommerceOrderColumns(toggle)}
                bootstrap4
                search
              >
                {toolkitProps => (
                  <React.Fragment>
                    <Row>
                      <Col xl="12">
                        <div className="table-responsive">
                          <BootstrapTable
                            keyField="id"
                            responsive
                            bordered={false}
                            striped={false}
                            defaultSorted={defaultSorted}
                            selectRow={selectRow}
                            classes={
                              "table align-middle table-nowrap table-check"
                            }
                            headerWrapperClasses={"table-light"}
                            {...toolkitProps.baseProps}
                            {...paginationTableProps}
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="pagination pagination-rounded justify-content-end">
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  </React.Fragment>
                )}
              </ToolkitProvider>
            )}
          </PaginationProvider>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

// StudentsList.propTypes = {
//   orders: PropTypes.array,
//   onGetOrders: PropTypes.func,
// };

export default withRouter(StudentsList);
