import i18n from "../locales/i18n";

const html = document.querySelector("html");

export const addedDataToHtmlOnLanguageChange = () => {
  html.style.direction = i18n.dir();
  html.setAttribute("data-dir", i18n.dir());
};
