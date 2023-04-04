export default function loadContact() {
  console.log("working");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const titleContainer = document.createElement("div");
  const locationContainer = document.createElement("div");

  titleContainer.classList.add("title-container", "flex", "container");
  locationContainer.classList.add("location-container", "flex", "container");

  container.appendChild(titleContainer);
  container.appendChild(locationContainer);

  const titleText = document.createElement("h3");
  const contactTitle = document.createElement("h4");
  const contactText = document.createElement("p");

  titleText.classList.add("title-text");
  titleText.textContent = "Morimoto - Disney Springs";
  titleContainer.appendChild(titleText);

  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "CONTACT";
  locationContainer.appendChild(contactTitle);

  contactText.classList.add("contact-text");
  contactText.textContent = `Phone: 999-999-9999`;
  const addressText = contactText.cloneNode(true);
  addressText.textContent = "1000 PBJ Way Kingston, RI 02360";

  locationContainer.appendChild(contactText);
  locationContainer.appendChild(addressText);
}
