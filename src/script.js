// Watch Features Description
const numbers = document.querySelectorAll(".number");
const article = document.querySelectorAll(".article");
const closeButton = document.querySelectorAll(".close");

numbers.forEach(function (number) {
  number.addEventListener("click", () => {
    let target = number.getAttribute("data-target");

    article.forEach(function (desc) {
      if (desc.getAttribute("data-desc") === target) {
        desc.classList.remove("hidden");
        console.log("muncul oy");
      } else {
        desc.classList.add("hidden");
      }
    });
  });
});

closeButton.forEach(function (closeB) {
  closeB.addEventListener("click", () => {
    article.forEach(function (desc) {
      desc.classList.add("hidden");
    });
  });
});

