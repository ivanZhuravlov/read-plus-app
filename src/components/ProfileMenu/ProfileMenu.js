import React, { useCallback, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import user1 from "../../assets/images/users/avatar-1.jpg";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { getStoreUser } from "../../store/auth/authSelectors";
import ModalWindow from "../ModalWindow/ModalWindow";
import { openLockScreen } from "../../store/layout/layoutSlice";

const ProfileMenu = () => {
  const { t } = useTranslation();
  const { logout } = useFirebaseAuth();
  const dispatch = useDispatch();
  const { fullName, type } = useSelector(getStoreUser);

  const [menu, setMenu] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);

  const onLockScreen = useCallback(() => {
    dispatch(openLockScreen());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <span className="d-none d-xl-inline-block font-size-15 ms-2 me-1">
          {fullName}
        </span>

        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <div className="d-flex align-items-center ">
            <div>
              <img
                className="rounded-circle header-profile-user"
                src={user1}
                alt="Header Avatar"
              />
              <div className="d-flex">
                <span className="d-block">{t(type)}</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </div>
            </div>
          </div>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {t("Profile")}{" "}
          </DropdownItem>

          <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            {t("My Wallet")}
          </DropdownItem>

          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {t("Settings")}
          </DropdownItem>

          <DropdownItem
            onClick={onLockScreen}
            tag="div"
            style={{ cursor: "pointer" }}
          >
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {t("Lock screen")}
          </DropdownItem>

          <div className="dropdown-divider" />
          <div
            onClick={() => setIsModalLogout(!isModalLogout)}
            className="dropdown-item logout"
            style={{ cursor: "pointer" }}
          >
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{t("Logout")}</span>
          </div>
        </DropdownMenu>
      </Dropdown>

      <ModalWindow
        animationType="confirmation"
        isOpen={isModalLogout}
        onToggle={() => setIsModalLogout(!isModalLogout)}
        onClose={() => setIsModalLogout(false)}
        title={t("confirmation")}
        body={t("logout confirmation msg")}
        footer={
          <>
            <button
              onClick={logout}
              type="button"
              className="btn btn-danger w-sm"
            >
              {t("Logout")}
            </button>
            <button
              onClick={() => setIsModalLogout(false)}
              type="button"
              className="btn btn-primary w-md"
            >
              {t("Cancel")}
            </button>
          </>
        }
      />
    </React.Fragment>
  );
};

export default ProfileMenu;
