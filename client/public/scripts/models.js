const renderModels = async () => {
  const response = await fetch("/models");
  const data = await response.json();

  const modelsList = document.getElementById("models-list");

  if (data && data.length) {
    data.forEach((model) => {
      const cardLink = document.createElement("a");
      cardLink.href = `/models/${model.id}`;
      cardLink.classList.add("card");

      const img = document.createElement("img");
      img.src = model.image_url;
      img.alt = model.name;
      cardLink.appendChild(img);

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      const name = document.createElement("h3");
      name.textContent = model.name;
      bottomContainer.appendChild(name);

      const dataSize = document.createElement("p");
      dataSize.textContent = "Model Size: " + model.modelSize;
      bottomContainer.appendChild(dataSize);

      const capabilities = document.createElement("p");
      capabilities.textContent = model.description;
      bottomContainer.appendChild(capabilities);

      cardLink.appendChild(bottomContainer);

      modelsList.appendChild(cardLink);
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
