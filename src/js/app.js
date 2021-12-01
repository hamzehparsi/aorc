let aboutUs = document.querySelector("#about-us");
let subMenuAboutUs = document.querySelector(".sub-menu-about-us");

aboutUs.addEventListener("mouseenter", () => {
  subMenuAboutUs.classList.add("activate");
  // menuItem.classList.add('text-green-400')
});
aboutUs.addEventListener("mouseleave", () => {
  subMenuAboutUs.classList.remove("activate");
  // menuItem.classList.remove('text-green-400')
});

let news = document.querySelector("#news-menu");
let subMenuNews = document.querySelector(".sub-menu-news");

news.addEventListener("mouseenter", () => {
  subMenuNews.classList.add("activate");
});
news.addEventListener("mouseleave", () => {
  subMenuNews.classList.remove("activate");
});

let tenders = document.querySelector("#tenders");
let subMenuTenders = document.querySelector(".sub-menu-tenders");

tenders.addEventListener("mouseenter", () => {
  subMenuTenders.classList.add("activate");
});
tenders.addEventListener("mouseleave", () => {
  subMenuTenders.classList.remove("activate");
});

let media = document.querySelector("#media");
let subMenuMedia = document.querySelector(".sub-menu-media");

media.addEventListener("mouseenter", () => {
  subMenuMedia.classList.add("activate");
});
media.addEventListener("mouseleave", () => {
  subMenuMedia.classList.remove("activate");
});

// csr menu
let csrMenu = document.querySelector("#csr-menu");
let subMenuCsr = document.querySelector(".sub-menu-csr-menu");

csrMenu.addEventListener("mouseenter", () => {
  subMenuCsr.classList.add("activate");
  // menuItem.classList.add('text-green-400')
});
csrMenu.addEventListener("mouseleave", () => {
  subMenuCsr.classList.remove("activate");
  // menuItem.classList.remove('text-green-400')
});



// user menu
let userImage = document.querySelector("#user-image");
let submenuUser = document.querySelector(".submenu-user");

userImage.addEventListener("mouseenter", () => {
  submenuUser.classList.add("activate");
});
userImage.addEventListener("mouseleave", () => {
  submenuUser.classList.remove("activate");
});

// mobile menu

let menuMobileIcon = document.querySelector("#mobileMenuIcon");
let subMenuMobile = document.querySelector("#subMenuMobile");

menuMobileIcon.addEventListener("click", () => {
  subMenuMobile.classList.toggle("activate");
});

// about us
let aboutLink = document.querySelector(".about-link ul");
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.addEventListener("click", () => {
  aboutLink.classList.toggle("hidden");
  aboutArrow.classList.toggle("-rotate-90");
});

// news
let newsLink = document.querySelector(".news-link ul");
let newsArrow = document.querySelector(".news-arrow");
newsArrow.addEventListener("click", () => {
  newsLink.classList.toggle("hidden");
  newsArrow.classList.toggle("-rotate-90");
});

// tenders
let tenderLink = document.querySelector(".tender-link ul");
let tenderArrow = document.querySelector(".tender-arrow");
tenderArrow.addEventListener("click", () => {
  tenderLink.classList.toggle("hidden");
  tenderArrow.classList.toggle("-rotate-90");
});

// media

let mediaLink = document.querySelector(".media-link ul");
let mediaArrow = document.querySelector(".media-arrow");
mediaArrow.addEventListener("click", () => {
  mediaLink.classList.toggle("hidden");
  mediaArrow.classList.toggle("-rotate-90");
});

// CSR

let csrLink = document.querySelector(".csr-link ul");
let csrArrow = document.querySelector(".csr-arrow");
csrArrow.addEventListener("click", () => {
  csrLink.classList.toggle("hidden");
  csrArrow.classList.toggle("-rotate-90");
});

// notification
let notificationBLock = document.querySelector("#notification");
setTimeout(() => {
  // let classesNotification =
  notificationBLock.classList.add("opacity-100", "-translate-y-8");
}, 3000);
let notiClose = document.querySelector("#notiClose");
notiClose.addEventListener("click", () => {
    notificationBLock.style.opacity = '0'
});


ScrollReveal({ distance: '30px', duration: 2500, delay:100 });
ScrollReveal().reveal('.titleBlock');
ScrollReveal().reveal('.news-item', { delay: 700 });
ScrollReveal().reveal('.event-item', { delay: 900 });
ScrollReveal().reveal('.multimedia-first', { delay: 500 });
ScrollReveal().reveal('.multimedia-second', { delay: 700 });
ScrollReveal().reveal('.multimedia-three', { delay: 1100 });

ScrollReveal().reveal('.tender-item', { delay: 500 });
ScrollReveal().reveal('.tender-voc', { delay: 700 });
ScrollReveal().reveal('.tender-download', { delay: 800 });


ScrollReveal().reveal('.majale', { delay: 700 });
ScrollReveal().reveal('.elmi', { delay: 900 });
// window.onscroll = () { hiddenArrow() }
window.onscroll = function() {hiddenArrow()};

function hiddenArrow() {
  if (document.body.scrollTo > 300 || document.documentElement.scrollTop > 300 ) {
    document.querySelector('#arrowSection').classList.add('opacity-0')
  }
}