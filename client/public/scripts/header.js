const header = document.querySelector("header");

const headerContainer = document.createElement("nav");
headerContainer.classList.add("header-container");

const logoTitleContainer = document.createElement("div");
logoTitleContainer.classList.add("logo-title-container");

const logoLink = document.createElement("a");
logoLink.href = "/";
const headerLogo = document.createElement("img");
headerLogo.src = "/logo.svg";
headerLogo.alt = "Neural Logo";
logoLink.appendChild(headerLogo);
logoTitleContainer.appendChild(logoLink);

const titleLink = document.createElement("a");
titleLink.href = "/";
const headerTitle = document.createElement("h1");
headerTitle.textContent = "Neural";
titleLink.appendChild(headerTitle);
logoTitleContainer.appendChild(titleLink);

headerContainer.appendChild(logoTitleContainer);

const navList = document.createElement("ul");
const navListItem = document.createElement("li");
const navLink = document.createElement("a");
navLink.href = "/";
navLink.textContent = "Home";
navLink.classList.add("home-link");

navListItem.appendChild(navLink);
navList.appendChild(navListItem);
headerContainer.appendChild(navList);

header.appendChild(headerContainer);
