import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import AuthMiddleware from "./routes/route";

import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

import { addedDataToHtmlOnLanguageChange } from "./helpers/languageHelper";
import { addDefaultBodyAttribute } from "./helpers/setAtrHelper";

import "./assets/scss/theme.scss";

const App = () => {
  useEffect(() => {
    addDefaultBodyAttribute();
    addedDataToHtmlOnLanguageChange();
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {privateRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
