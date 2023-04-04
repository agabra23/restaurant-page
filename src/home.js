export default function loadPage() {
  console.log("working");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const titleContainer = document.createElement("div");
  const aboutContainer = document.createElement("div");
  const hoursContainer = document.createElement("div");
  const locationContainer = document.createElement("div");

  titleContainer.classList.add("title-container", "flex", "container");
  aboutContainer.classList.add("about-container", "flex", "container");
  hoursContainer.classList.add("hours-container", "flex", "container");
  locationContainer.classList.add("location-container", "flex", "container");

  container.appendChild(titleContainer);
  container.appendChild(aboutContainer);
  container.appendChild(hoursContainer);
  container.appendChild(locationContainer);

  const titleText = document.createElement("h3");
  const aboutText = document.createElement("p");
  const hoursTitle = document.createElement("h4");
  const hoursList = document.createElement("ul");
  const locationTitle = document.createElement("h4");
  const locationText = document.createElement("p");

  titleText.classList.add("title-text");
  titleText.textContent = "Morimoto - Disney Springs";
  titleContainer.appendChild(titleText);

  aboutText.classList.add("about-text");
  aboutText.textContent = `The gold standard for contemporary Japanese cuisine in the vibrant
            culinary capital of Philadelphia, Masaharu Morimoto’s flagship
            restaurant serves as a sublime showcase for the world-renowned
            chef’s exhilarating native cuisine. Pulling from both ancient
            Japanese tradition and of-the-moment culinary technique, the
            world-renowned Morimoto unlocks hidden layers of flavor on every
            plate, whether it’s sublime cuts of pristine sashimi or an
            inventive, unexpected spin with truly global influences. A haven for
            food enthusiasts with diverse and discerning palates, the Iron Chef
            accommodates all styles of dining, from an inventive mix-and-match a
            la carte meal to an opulent omakase, or tasting menu, tailored to
            your tastes by our kitchen. The breathtaking décor, built around a
            modern-yet-organic aesthetic that is both cutting-edge and
            comfortable, furthers the immersion into Morimoto’s daring,
            delicious world.`;
  aboutContainer.appendChild(aboutText);

  hoursTitle.classList.add("hours-title");
  hoursTitle.textContent = "HOURS";
  hoursContainer.appendChild(hoursTitle);

  hoursList.classList.add("hours-list");
  hoursContainer.appendChild(hoursList);
  const hoursArr = [
    "Monday: 10 AM to 10 PM",
    "Tuesday: 10 AM to 10 PM",
    "Wednesday: 10 AM to 10 PM",
    "Thursday: 10 AM to 10 PM",
    "Friday: 10 AM to 10 PM",
    "Saturday: 10 AM to 11:30 PM",
    "Sunday: CLOSED",
  ];
  for (let i = 0; i < hoursArr.length; i++) {
    console.log("loop");
    let listItem = document.createElement("li");
    listItem.textContent = hoursArr[i];
    hoursList.appendChild(listItem);
  }

  locationTitle.classList.add("location-title");
  locationTitle.textContent = "LOCATION";
  locationContainer.appendChild(locationTitle);

  locationText.classList.add("location-text");
  locationText.textContent = `723 Chestnut Street, Disney Springs, Florida`;
  locationContainer.appendChild(locationText);
}
