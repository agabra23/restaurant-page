import "./style.css";
import loadHome from "./home.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";

window.onload = () => {
  loadHome();
  activate(homeTab);
};
const homeTab = document.getElementById("home");
homeTab.onclick = () => {
  loadHome();
  activate(homeTab);
};
const contactTab = document.getElementById("contact");
contactTab.onclick = () => {
  loadContact();
  activate(contactTab);
};
const menuTab = document.getElementById("menu");
menuTab.onclick = () => {
  loadMenu();
  activate(menuTab);
};

const activate = (tab) => {
  homeTab.classList.remove("active");
  contactTab.classList.remove("active");
  menuTab.classList.remove("active");

  tab.classList.add("active");

  if (tab === homeTab) loadHome();
  if (tab === contactTab) loadContact();
  if (tab === menuTab) loadMenu();
};
