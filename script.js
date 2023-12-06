// slider home
// let indexs = 0;
// slideHome();
// function slideHome() {
//   let homeText = document.getElementsByClassName("home-text");
//   for (let i = 0; i < homeText.length; i++) {
//     homeText[i].style.display = "none";
//     homeText[i].classList.add("home-active", "home-a");
//   }
//   indexs++;
//   if (indexs > homeText.length) {
//     indexs = 1;
//   }
//     homeText[indexs - 1].style.display = "block";
//   homeText[indexs - 1].classList.remove("home-active", "home-a");
//   setTimeout(slideHome, 2000);
// }
RENDER_SCROLL = "header-active";
headerActive();
function headerActive() {
  window.addEventListener("scroll", () => {
    document.dispatchEvent(new Event(RENDER_SCROLL));
  });
}
document.addEventListener(RENDER_SCROLL, () => {
  const posisi = window.scrollY > 100;
  const headerHome = document.querySelector(".header");
  headerHome.classList.toggle("header-active", posisi);
});
