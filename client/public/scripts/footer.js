const footer = document.querySelector("footer");

const footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");

const socialLinks = document.createElement("div");
socialLinks.classList.add("social-links");

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/jamesjbustos/llm-list";
githubLink.classList.add("footer-link", "github-link");
const githubIcon = document.createElement("img");
githubIcon.src = "/github-icon.svg";
githubIcon.alt = "GitHub";
githubLink.appendChild(githubIcon);
socialLinks.appendChild(githubLink);

const copyrightText = document.createElement("div");
copyrightText.classList.add("copyright-text");
copyrightText.innerHTML =
  '© 2023 Built by <a href="https://twitter.com/jamesjbustos" target="_blank" rel="noopener noreferrer" class="footer-link">James Bustos</a>. All rights reserved.';

footerContainer.appendChild(socialLinks);
footerContainer.appendChild(copyrightText);
footer.appendChild(footerContainer);
