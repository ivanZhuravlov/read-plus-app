export const changeBodyAttribute = (attribute, value) => {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
};

export const addDefaultBodyAttribute = () => {
  changeBodyAttribute("data-top-bar", "light");
  changeBodyAttribute("data-layout", "vertical");
  changeBodyAttribute("data-sidebar", "dark");
  changeBodyAttribute("data-sidebar-image", "none");
  changeBodyAttribute("data-layout-size", "fluid");
  changeBodyAttribute("data-layout-scrollable", "false");
};
