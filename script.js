document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
  
    function showSlide(newIndex) {
      if (newIndex < 0) {
        index = slides.length - 1;
      } else if (newIndex >= slides.length) {
        index = 0;
      } else {
        index = newIndex;
      }
      slider.style.transform = `translateX(${-index * 100}%)`;
    }
  
    prevBtn.addEventListener("click", () => showSlide(index - 1));
    nextBtn.addEventListener("click", () => showSlide(index + 1));
  
    setInterval(() => showSlide(index + 1), 3000); // Auto-slide every 3 seconds
  });
  