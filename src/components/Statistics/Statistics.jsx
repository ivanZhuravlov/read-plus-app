import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

import ColumnChart from "../ColumnChart/ColumnChart";
import { monthData, weekData, yearData } from "../../common/data";

const Statistics = () => {
  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  const onChangeChartPeriod = pType => {
    setPeriodType(pType);
  };

  useEffect(() => {
    periodType === "weekly" && setPeriodData(weekData);
    periodType === "monthly" && setPeriodData(monthData);
    periodType === "yearly" && setPeriodData(yearData);
  }, [periodType]);

  return (
    <Card>
      <CardBody>
        <div className="d-sm-flex flex-wrap">
          <h4 className="card-title mb-4">Email Sent</h4>

          <div className="ms-auto">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link
                  to="#"
                  className={classNames(
                    { active: periodType === "weekly" },
                    "nav-link"
                  )}
                  onClick={() => {
                    onChangeChartPeriod("weekly");
                  }}
                  id="one_month"
                >
                  Week
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className={classNames(
                    { active: periodType === "monthly" },
                    "nav-link"
                  )}
                  onClick={() => {
                    onChangeChartPeriod("monthly");
                  }}
                  id="one_month"
                >
                  Month
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className={classNames(
                    { active: periodType === "yearly" },
                    "nav-link"
                  )}
                  onClick={() => {
                    onChangeChartPeriod("yearly");
                  }}
                  id="one_month"
                >
                  Year
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="clearfix"></div> */}
        <ColumnChart periodData={periodData} />
      </CardBody>
    </Card>
  );
};

export default Statistics;
