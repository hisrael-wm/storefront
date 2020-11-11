import App from "./app";

window.onload = function() {
  const options = {
    stage: {
      w: 1920,
      h: 1080,
    }
  };

  const app = new App(options);
  document.body.appendChild(app.stage.getCanvas());
}