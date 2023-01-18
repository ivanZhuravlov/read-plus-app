import React from "react";
import { child, get, ref } from "firebase/database";
import { db } from "../api/firebase.config";

const useFirebaseGetFunctions = () => {
  const dbRef = ref(db);

  const getUserByID = async userID => {
    try {
      const sn = await get(child(dbRef, `users/${userID}`));

      return (function (snapshot) {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })(sn);
    } catch (e) {
      console.error(e);
    }
  };
  return { getUserByID };
};

export default useFirebaseGetFunctions;
