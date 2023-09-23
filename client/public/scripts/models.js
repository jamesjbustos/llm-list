const renderModels = async () => {
  const response = await fetch("/models");
  const data = await response.json();

  const modelsList = document.getElementById("models-list");

  if (data && data.length) {
    data.forEach((model) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${model.image_url})`;

      const name = document.createElement("h3");
      name.textContent = model.name;
      bottomContainer.appendChild(name);

      const dataSize = document.createElement("p");
      dataSize.textContent = "Data Size: " + model.data_size;
      bottomContainer.appendChild(dataSize);

      const capabilities = document.createElement("p");
      capabilities.textContent = "Capabilities: " + model.capabilities;
      bottomContainer.appendChild(capabilities);

      const link = document.createElement("a");
      link.textContent = "Learn More >";
      link.setAttribute("role", "button");
      link.href = `/models/${model.id}`;
      link.classList.add("read-more-link");
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      modelsList.appendChild(card);
    });
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "No Models Found";
    modelsList.appendChild(errorMessage);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderModels();
}
