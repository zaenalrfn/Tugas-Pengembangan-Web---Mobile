RENDER_SCROLL = "header-active";
SCROLL_KEATAS = "top";
headerActive();
function headerActive() {
  window.addEventListener("scroll", () => {
    document.dispatchEvent(new Event(RENDER_SCROLL));
    document.dispatchEvent(new Event(SCROLL_KEATAS));
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
});
document.addEventListener(SCROLL_KEATAS, () => {
  const posisi = window.scrollY > 100;
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
    "https://www.youtube.com/embed/UniviIRrYGE?si=WiOmDnXIU11FJGRf&autoplay=1"
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
    ? ((videoYoutube.style.display = ""),
      (document.body.style.overflow = ""),
      frameVideo.removeAttribute("src"))
    : false;
});

// BAGIAN NAVBAR AKTIF
let bar = document.getElementById("bar"),
  barUlLi = document.querySelector(".navbar");
bar.addEventListener("click", function () {
  barUlLi.classList.toggle("bar-aktif");
});

let navbar = document.querySelector(".navbar"),
  navbarA = document.querySelectorAll("ul a");
navbarA.forEach((a) => {
  a.addEventListener("click", function () {
    navbar.querySelector(".navbar-aktif").classList.remove("navbar-aktif");
    a.classList.toggle("navbar-aktif");
  });
});

// BAGIAN POPUP GALERI IMG
let popupBox = document.querySelector(".popup-box"),
  popUpImg = document.querySelector(".popup-img img");
const tutupPopup = () => {
  popupBox.style.display = "none";
};

const bukaPopup = (gambar) => {
  popUpImg.setAttribute("src", gambar);
  popupBox.classList.add("popup-anima");
  popupBox.style.display = "flex";
};

// BAGIAN FOOTER TAHUN
const footerTahun = document.getElementById("footer-tahun");
const tahun = new Date();
footerTahun.innerText = tahun.getFullYear();
