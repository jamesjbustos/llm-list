import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Counter</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
