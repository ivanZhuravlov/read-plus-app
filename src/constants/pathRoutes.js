export const pathRoutes = {
  ROOT: "/",

  // private
  LOCK_SCREEN: "/lock-screen",
  OWNER_DASHBOARD: "/owner-dashboard",
  SCHOOLS_LIST: "/schools-list",
  SCHOOL_SINGLE_DASHBOARD: "/school/:schoolID/dashboard",
  SCHOOL_SINGLE_CLASSES: "/school/:schoolID/classes",
  SCHOOL_ADMINS: "/school/admins",
  SCHOOL_CLASSES_SINGLE_STUDENTS: "/school/classes/:classID/students",
  SCHOOL_CLASSES_SINGLE_TASKS: "/school/classes/:classID/tasks",
  CLASS_SINGLE_TASKS_STUDENT_DONE_TASKS:
    "/class/:classID/student/:studentID/done-tasks",
  SCHOOL_DASHBOARD: "/school/dashboard",
  SCHOOL_CLASSES: "/school/classes",
  SCHOOL_TEACHERS: "/school/teachers",
  TEACHER_DASHBOARD: "/teacher-dashboard",
  TEACHER_CLASSES: "/teacher/classes",
  TEACHER_CLASSES_SINGLE: "/teacher/classes/:classID",
  TEACHER_CLASSES_SINGLE_STUDENTS: "/students",
  TEACHER_CLASSES_SINGLE_TASKS: "/tasks",

  // public
  SIGN_IN: "/sign-in",
  AUTO_SIGN_IN: "/auto-sign-in",
  PRIVACY_POLICY: "/privacy-policy",
  PAGE_404: "/page-404",
};
