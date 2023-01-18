import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getStoreAuth } from "../store/auth/authSelectors";
import { useSelector } from "react-redux";
import { getStoreLayout } from "../store/layout/layoutSelectors";
import { pathRoutes } from "../constants/pathRoutes";

const AuthMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const { location } = useHistory();

  const { isAuthenticated } = useSelector(getStoreAuth);
  const { isLockScreen } = useSelector(getStoreLayout);

  return (
    <Route
      {...rest}
      render={props => {
        // for lock screen route
        if (location.pathname === pathRoutes.LOCK_SCREEN && isLockScreen) {
          return <Component {...props} />;
        } else if (
          location.pathname === pathRoutes.LOCK_SCREEN &&
          !isLockScreen
        ) {
          console.log(props);
          return (
            <Redirect
              to={{
                pathname: props.location.state.from.pathname,
                state: { from: props.location },
              }}
            />
          );
        }

        // other
        if (isAuthProtected && !isAuthenticated && !isLockScreen) {
          return (
            <Redirect
              to={{
                pathname: pathRoutes.SIGN_IN,
                state: { from: props.location },
              }}
            />
          );
        } else if (isAuthProtected && isAuthenticated && isLockScreen) {
          return (
            <Redirect
              to={{
                pathname: pathRoutes.LOCK_SCREEN,
                state: { from: props.location },
              }}
            />
          );
        }

        // if (location.pathname === "/lock-screen") {
        //   return <Component {...props} />;
        // }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

AuthMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AuthMiddleware;
