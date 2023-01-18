import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Lottie from "react-lottie";
import { useHistory, withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { useTranslation } from "react-i18next";

import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { getCurrentRoute } from "../../helpers/metaTagsHelper";

import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";
import Spinner from "../../components/Spinner/Spinner";

import { ReactComponent as RPLogo } from "../../assets/images/logo/rp-logo-hor_no-text.svg";
import lotemXLogo from "../../assets/images/logo/logo_lotemx.svg";
import { pathRoutes } from "../../constants/pathRoutes";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { getAnimation } from "../../helpers/lottieAnimationsHelper";
import { useSelector } from "react-redux";
import { getStoreAuth } from "../../store/auth/authSelectors";

const Login = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { loginFirebase, checkSignIn } = useFirebaseAuth();
  const { isAuthenticated } = useSelector(getStoreAuth);

  const [isModalSendLinkSuccess, setIsModalSendLinkSuccess] = useState(false);
  const [isModalEmailError, setIsModalEmailError] = useState(false);
  const [isModalInvalidLink, setIsModalInvalidLink] = useState(false);
  const [isModalAuthError, setIsModalAuthError] = useState(false);

  const isEmailForSignIn = localStorage.getItem("emailForSignIn");
  const isAutoSignIn = history.location.pathname === pathRoutes.AUTO_SIGN_IN;

  const onSubmit = email => {
    loginFirebase(email, setIsModalSendLinkSuccess, setIsModalEmailError);
  };

  useEffect(() => {
    isAuthenticated && history.replace(pathRoutes.OWNER_DASHBOARD);
  }, [isAuthenticated]);

  useEffect(() => {
    isAutoSignIn && checkSignIn(setIsModalInvalidLink, setIsModalAuthError);
  }, [isAutoSignIn]);

  return (
    <>
      <div>
        <MetaTags>
          <title>{getCurrentRoute("public", history).metaData.tag}</title>
        </MetaTags>
        <Container fluid className="p-0 ">
          <Row className="g-0">
            <Col
              className="bg-light d-flex min-vh-100 align-items-xs-start align-items-xl-center"
              xl={9}
              md={12}
              style={{ pointerEvents: "none" }}
            >
              <Lottie
                width={"85%"}
                height={"auto"}
                options={getAnimation("bg-sign-in")}
              />
            </Col>

            <Col className="sign-in-form-wrp" xs={11} sm={9} md={6} xl={3}>
              <div className="auth-full-page-content  p-md-5 pt-5 p-3  bg-white">
                <div className="language-dropdown-sign-in">
                  <LanguageDropdown />
                </div>

                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <RPLogo
                        className="auth-logo-light"
                        style={{ marginTop: "25px" }}
                      />
                      <p className="sign-in-logo-subtitle">
                        {t("The world's most advanced reading app")}
                      </p>
                    </div>

                    <div className="my-auto">
                      <div>
                        <p className="text-primary h2">{t("Welcome")}</p>
                        <p className="text-muted">
                          {t("Sign in to continue to Read Plus")}
                        </p>
                      </div>

                      <div className="mt-4">
                        <AvForm
                          className="form-horizontal"
                          onValidSubmit={(e, v) => onSubmit(v.email)}
                        >
                          <div className="mb-3">
                            <AvField
                              errorMessage={t("This field is invalid")}
                              name="email"
                              label={t("Email")}
                              value=""
                              className="form-control"
                              placeholder={t("Enter email")}
                              type="email"
                              required
                            />
                          </div>

                          <div className="mt-3 d-grid">
                            <button
                              className="btn btn-primary btn-block "
                              type="submit"
                            >
                              {t("Sign In")}
                            </button>
                          </div>

                          <Spinner
                            overlay
                            isShow={
                              (isAutoSignIn && isModalInvalidLink) ||
                              (isAutoSignIn && isModalAuthError) ||
                              (isAutoSignIn && Boolean(isEmailForSignIn))
                            }
                          />
                        </AvForm>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        {t("Crafted with")}
                        <img
                          src={lotemXLogo}
                          alt="lotemX"
                          style={{ width: "22px", margin: "0 10px" }}
                        />
                        LotemX
                      </p>
                      <p>© {new Date().getFullYear()} Read Plus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ModalWindow
        animationType="send-email"
        isOpen={isModalSendLinkSuccess}
        onToggle={() => setIsModalSendLinkSuccess(!isModalSendLinkSuccess)}
        onClose={() => setIsModalSendLinkSuccess(false)}
        title={t("success")}
        body={t("send link success msg")}
      />

      <ModalWindow
        animationType="error"
        isOpen={isModalEmailError}
        onToggle={() => setIsModalEmailError(!isModalEmailError)}
        onClose={() => setIsModalEmailError(false)}
        title={t("error")}
        body={t("invalid user email msg")}
      />

      <ModalWindow
        animationType="error"
        isOpen={isModalInvalidLink}
        onToggle={() => setIsModalInvalidLink(!isModalInvalidLink)}
        onClose={() => setIsModalInvalidLink(false)}
        title={t("error")}
        body={t("invalid link msg")}
      />

      <ModalWindow
        animationType="error"
        isOpen={isModalAuthError}
        onToggle={() => setIsModalAuthError(!isModalAuthError)}
        onClose={() => setIsModalAuthError(false)}
        title={t("error")}
        body={t("auth error msg")}
      />
    </>
  );
};

export default withRouter(Login);
