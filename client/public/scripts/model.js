const renderModel = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/models");
  const data = await response.json();

  const modelContent = document.getElementById("model-content");

  let model;

  model = data.find((m) => m.id === requestedID);

  if (model) {
    document.getElementById("image").src = model.image_url;
    document.getElementById("name").textContent = model.name;
    document.getElementById("org").textContent = model.organization;
    document.getElementById("model_size").textContent = model.model_size;
    document.getElementById("type").textContent = model.type;
    document.getElementById("capabilities").textContent = model.capabilities;
    document.getElementById("release_date").textContent = model.release_date;
    document.title = `AI Model - ${model.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Models Available 😞";
    modelContent.appendChild(message);
  }
};

renderModel();
