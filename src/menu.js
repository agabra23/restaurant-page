export default function loadContact() {
  console.log("working");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const titleContainer = document.createElement("div");
  const menuContainer = document.createElement("div");

  titleContainer.classList.add("title-container", "flex", "container");
  menuContainer.classList.add("menu-container", "flex", "container");

  container.appendChild(titleContainer);
  container.appendChild(menuContainer);

  const titleText = document.createElement("h3");
  const menuTitle = document.createElement("h4");
  const menuList = document.createElement("ul");

  titleText.classList.add("title-text");
  titleText.textContent = "Morimoto - Disney Springs";
  titleContainer.appendChild(titleText);

  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "MENU";
  menuContainer.appendChild(menuTitle);
  menuList.classList.add("menu-list");

  menuContainer.appendChild(menuList);

  const menuArr = [
    "Steak $1 Million",
    "Ramen $1 Million",
    "Orange Chicken $1 Million",
  ];

  for (let i = 0; i < menuArr.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = menuArr[i];
    menuList.appendChild(listItem);
  }
}
