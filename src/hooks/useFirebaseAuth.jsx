import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { app, db } from "../api/firebase.config";
import { useHistory } from "react-router-dom";
import useFirebaseGetFunctions from "./useFirebaseGetFunctions";
import { useDispatch } from "react-redux";
import { onLogout, onUserExist } from "../store/auth/authSlice";

const makeEmailWithoutDots = email => email.replaceAll(".", "");

const useFirebaseAuth = () => {
  const history = useHistory();
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const { getUserByID } = useFirebaseGetFunctions(app);

  const actionCodeSettings = {
    url: "http://localhost:3000/auto-sign-in",
    handleCodeInApp: true,
  };

  const loginFirebase = async (email, callbackSuccess, callbackEmailError) => {
    try {
      const userRef = ref(db, `users/${makeEmailWithoutDots(email)}`);

      const getUserSnapshot = async snapshot => {
        const userInfo = snapshot.val();

        if (userInfo) {
          await sendLink(email, callbackSuccess);
          return;
        }
        callbackEmailError(true);
      };

      onValue(userRef, getUserSnapshot);
    } catch (error) {
      // showError("#ff0000", t("error"), t("authError"));
      console.error(error);
      return null;
    }
  };

  const sendLink = async (email, callbackSuccess) => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      localStorage.setItem("emailForSignIn", email);
      callbackSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const checkSignIn = async (callbackInvalidLink, callbackAuthError) => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailForSignIn");

      if (!email) {
        callbackInvalidLink(true);
        return;
      }

      try {
        const result = await signInWithEmailLink(
          auth,
          email,
          window.location.href
        );

        if (result) {
          const { info } = await getUserByID(
            makeEmailWithoutDots(result.user.email)
          );
          const userData = {
            ...info,
            uid: result.user.uid,
          };

          dispatch(onUserExist(userData));

          localStorage.removeItem("emailForSignIn");
        }
      } catch (error) {
        console.error(error);
        callbackAuthError(true);
      }
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(onLogout());
        // history.replace(pathRoutes.SIGN_IN);
      })
      .catch(error => {
        console.error(error);
        // An error happened.
      });
  };

  return { sendLink, checkSignIn, logout, loginFirebase };
};

export default useFirebaseAuth;
