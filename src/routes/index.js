import React from "react";
import { Redirect } from "react-router-dom";

import Login from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import LockScreen from "../pages/LockScreen/LockScreen";
import Page404 from "../pages/Utility/Page-404";
import Task from "../components/Test/UserList/UserList";
import Student from "../components/Test/Student/Student";

import { userTypes } from "../constants/userTypes";
import { pathRoutes } from "../constants/pathRoutes";

const privateRoutes = [
  {
    //
    path: pathRoutes.LOCK_SCREEN,
    component: LockScreen,
    allowedTypes: [
      userTypes.OWNER,
      userTypes.TOP_ADMIN,
      userTypes.ADMIN,
      userTypes.TEACHER,
    ],
    metaData: {
      tag: "Lock Screen | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.OWNER_DASHBOARD,
    component: Dashboard,
    allowedTypes: [userTypes.OWNER],
    metaData: {
      tag: "Owner dashboard | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOLS_LIST,
    component: Dashboard,
    allowedTypes: [userTypes.OWNER],
    metaData: {
      tag: "System schools list | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_SINGLE_DASHBOARD,
    component: Dashboard,
    allowedTypes: [userTypes.OWNER],
    metaData: {
      tag: "School dashboard | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_SINGLE_CLASSES,
    component: Dashboard,
    allowedTypes: [userTypes.OWNER],
    metaData: {
      tag: "School classes | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_ADMINS,
    component: Dashboard,
    allowedTypes: [userTypes.OWNER, userTypes.TOP_ADMIN, userTypes.ADMIN],
    metaData: {
      tag: "School admins | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.TEACHER_CLASSES_SINGLE_STUDENTS,
    component: Dashboard,
    allowedTypes: [
      userTypes.OWNER,
      userTypes.TOP_ADMIN,
      userTypes.ADMIN,
      userTypes.TEACHER,
    ],
    metaData: {
      tag: "Students | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_CLASSES_SINGLE_TASKS,
    component: Task,
    allowedTypes: [
      userTypes.OWNER,
      userTypes.TOP_ADMIN,
      userTypes.ADMIN,
      userTypes.TEACHER,
    ],
    metaData: {
      tag: "Tasks | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.CLASS_SINGLE_TASKS_STUDENT_DONE_TASKS,
    component: Dashboard,
    allowedTypes: [
      userTypes.OWNER,
      userTypes.TOP_ADMIN,
      userTypes.ADMIN,
      userTypes.TEACHER,
    ],
    metaData: {
      tag: "Done tasks | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_DASHBOARD,
    component: Dashboard,
    allowedTypes: [userTypes.TOP_ADMIN, userTypes.ADMIN],
    metaData: {
      tag: "School dashboard | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_CLASSES,
    component: Student,
    allowedTypes: [userTypes.TOP_ADMIN, userTypes.ADMIN],
    metaData: {
      tag: "School classes | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.SCHOOL_TEACHERS,
    component: Dashboard,
    allowedTypes: [userTypes.TOP_ADMIN, userTypes.ADMIN],
    metaData: {
      tag: "School teachers | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.TEACHER_DASHBOARD,
    component: Dashboard,
    allowedTypes: [userTypes.TEACHER],
    metaData: {
      tag: "Teacher dashboard | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.TEACHER_CLASSES,
    component: Dashboard,
    allowedTypes: [userTypes.TEACHER],
    metaData: {
      tag: "Teacher classes | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.TEACHER_CLASSES_SINGLE,
    component: Dashboard,
    allowedTypes: [userTypes.TEACHER],
    metaData: {
      tag: "Teacher class | Read Plus",
    },
    innerRoutes: [
      {
        path: pathRoutes.TEACHER_CLASSES_SINGLE_STUDENTS,
        component: Dashboard,
        allowedTypes: [userTypes.TEACHER],
        metaData: {
          tag: "Students | Read Plus",
        },
      },
      {
        path: pathRoutes.TEACHER_CLASSES_SINGLE_TASKS,
        component: Dashboard,
        allowedTypes: [userTypes.TEACHER],
        metaData: {
          tag: "Tasks | Read Plus",
        },
      },
    ],
  },
  {
    //
    path: pathRoutes.ROOT,
    exact: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={pathRoutes.OWNER_DASHBOARD} />,
  },
];

const publicRoutes = [
  {
    path: pathRoutes.SIGN_IN,
    component: Login,
    metaData: {
      tag: "Sing in | Read Plus",
    },
  },
  {
    path: pathRoutes.AUTO_SIGN_IN,
    component: Login,
    metaData: {
      tag: "Auto sing in | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.PRIVACY_POLICY,
    component: Dashboard,
    metaData: {
      tag: "Privacy policy | Read Plus",
    },
  },
  {
    //
    path: pathRoutes.PAGE_404,
    component: Page404,
    metaData: {
      tag: "Page 404 | Read Plus",
    },
  },
];

export { privateRoutes, publicRoutes };
