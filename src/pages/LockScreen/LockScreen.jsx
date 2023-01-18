import React, { useCallback, useState } from "react";
import MetaTags from "react-meta-tags";
import { getCurrentRoute } from "../../helpers/metaTagsHelper";
import { Col, Container, Row } from "reactstrap";
import Lottie from "react-lottie";
import { getAnimation } from "../../helpers/lottieAnimationsHelper";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";
import { ReactComponent as RPLogo } from "../../assets/images/logo/rp-logo-hor_no-text.svg";
import { AvField, AvForm } from "availity-reactstrap-validation";
import lotemXLogo from "../../assets/images/logo/logo_lotemx.svg";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getStoreUser } from "../../store/auth/authSelectors";
import { closeLockScreen } from "../../store/layout/layoutSlice";

const LockScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { email } = useSelector(getStoreUser);

  const [isModalEmailError, setIsModalEmailError] = useState(false);

  const onUnLockScreen = useCallback(
    values => {
      if (values.email === email) {
        dispatch(closeLockScreen());
      } else {
        setIsModalEmailError(true);
      }
    },
    [dispatch]
  );

  return (
    <>
      <div>
        <MetaTags>
          <title>{getCurrentRoute("private", history).metaData.tag}</title>
        </MetaTags>
        <Container fluid className="p-0">
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
                        <div className="text-primary h1 d-flex align-items-center">
                          <i className="bx bx-lock" />
                          <span>{t("Lock screen")}</span>
                        </div>
                        <p className="text-muted">
                          {t("Sign in to continue to Read Plus")}
                        </p>
                      </div>

                      <div className="mt-4">
                        <AvForm
                          className="form-horizontal"
                          onValidSubmit={(e, v) => onUnLockScreen(v)}
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
        animationType="error"
        isOpen={isModalEmailError}
        onToggle={() => setIsModalEmailError(!isModalEmailError)}
        onClose={() => setIsModalEmailError(false)}
        title={t("error")}
        body={t("invalid user email lock msg")}
      />
    </>
  );
};

export default LockScreen;
