RENDER_SCROLL = "header-active";
headerActive();
function headerActive() {
  window.addEventListener("scroll", () => {
    document.dispatchEvent(new Event(RENDER_SCROLL));
  });
}
// BAGIAN SCROOL KEATAS
let btnAtas = document.querySelector(".keatas");
btnAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener(RENDER_SCROLL, () => {
  const posisi = window.scrollY > 100;
  const headerHome = document.querySelector(".header");
  headerHome.classList.toggle("header-active", posisi);
  posisi ? (btnAtas.style.display = "flex") : (btnAtas.style.display = "none");
});

// BAGIAN VIDEO MALIOBORO
let putarVideo = document.getElementById("putar-video"),
  tutupVideo = document.querySelector(".tutup-video"),
  videoYoutube = document.querySelector(".video-ytb"),
  frameVideo = document.getElementById("vid");
putarVideo.addEventListener("click", function () {
  videoYoutube.style.display = "flex";
  videoYoutube.classList.add("anim-video");
  document.body.style.overflow = "hidden";
  frameVideo.setAttribute(
    "src",
    "https://www.youtube.com/embed/3IjDlXZmesQ?si=_Jbzgo1hvW7NvPGK&autoplay=1"
  );
});
tutupVideo.addEventListener("click", function () {
  videoYoutube.style.display = "";
  videoYoutube.classList.remove("anim-video");
  document.body.style.overflow = "";
  frameVideo.removeAttribute("src");
});
window.addEventListener("click", (eventVideo) => {
  eventVideo.target === videoYoutube
    ? (videoYoutube.style.display = "")
    : false;
});

// BAGIAN NAVBAR AKTIF
let bar = document.getElementById("bar"),
  barUlLi = document.querySelector(".navbar");
bar.addEventListener("click", function () {
  barUlLi.classList.toggle("bar-aktif");
});
