$("input").on("change", function () {
  $("body").toggleClass("blue");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSgjCLbo2yZhwkmCYuEDiPU3Wu9_XFSkJYNrPTO6Y3io3BtOpm3xHxozoZZu0Fia32ww/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
