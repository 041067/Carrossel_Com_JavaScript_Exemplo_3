const imgs = document.getElementById("img");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    imgs.scrollBy({ left: 320, behavior: 'smooth' });
    if (imgs.scrollLeft + imgs.clientWidth >= imgs.scrollWidth) {
      imgs.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 3000);
});