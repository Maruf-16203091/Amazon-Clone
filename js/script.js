document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".pagination");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    updateDots(index);
  }

  function updateDots(index) {
    dotsContainer.innerHTML = "";

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot", i === index ? "active" : "");
      dot.addEventListener("click", () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});
