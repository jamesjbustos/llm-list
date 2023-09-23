const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerLogo = document.createElement("img");
headerLogo.src = "/logo.svg";

const logoLink = document.createElement("a");
logoLink.href = "/";
logoLink.appendChild(headerLogo);
headerLeft.appendChild(logoLink);

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Neural";
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const navList = document.createElement("ul");
const navListItem = document.createElement("li");
const navLink = document.createElement("a");
navLink.href = "#";
navLink.textContent = "Home";
navLink.className = "home-link";

navLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location = "/";
});

navListItem.appendChild(navLink);
navList.appendChild(navListItem);
headerRight.appendChild(navList);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
