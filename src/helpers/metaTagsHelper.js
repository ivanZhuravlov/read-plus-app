import { privateRoutes, publicRoutes } from "../routes";

export const getCurrentRoute = (routeType, history) => {
  if (routeType === "private") {
    return privateRoutes.find(i => i.path === history.location.pathname);
  }

  if (routeType === "public") {
    return publicRoutes.find(i => i.path === history.location.pathname);
  }

  return { metaData: { tag: "" } };
};
