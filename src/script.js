// Watch Features Description
const numbers = document.querySelectorAll(".number");
const articles = document.querySelectorAll(".article");
const closeButtons = document.querySelectorAll(".close");

numbers.forEach(function (number) {
  number.addEventListener("click", () => {
    let target = number.getAttribute("data-target");

    articles.forEach(function (article) {
      if (article.getAttribute("data-desc") === target) {
        article.classList.remove("hidden");
        console.log("muncul oy");
      } else {
        article.classList.add("hidden");
      }
    });
  });
});

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", () => {
    articles.forEach(function (article) {
      article.classList.add("hidden");
    });
  });
});

