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

// BAGIAN GALERI
fetch("./galeri.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    dataGaleri(data);
  });

const dataGaleri = (galeri) => {
  const galeriMalioboro = document.querySelector(".galeri");
  galeriMalioboro.innerHTML = "";
  galeri.forEach((data) => {
    const galeriCard = document.createElement("div"),
      galeriImg = document.createElement("div"),
      gambar = document.createElement("img"),
      galeriBtn = document.createElement("div"),
      galeriJudul = document.createElement("h3"),
      galeriButton = document.createElement("button");
    galeriCard.setAttribute("class", "galeri-card");
    galeriImg.setAttribute("class", "galeri-img");
    gambar.setAttribute("src", `img/galeri/${data.img}`);
    galeriBtn.setAttribute("class", "galeri-btn");
    galeriJudul.innerText = data.judul;
    galeriButton.innerText = data.btn;
    galeriImg.append(gambar);
    galeriBtn.append(galeriJudul, galeriButton);
    galeriCard.append(galeriImg, galeriBtn);
    galeriMalioboro.append(galeriCard);
  });
};
