let switchBtn = document.getElementById("turnRotate");
console.log(switchBtn);
switchBtn.addEventListener("click", function () {
  console.log("ok");
  let boxs = document.querySelectorAll(".boxs .big");
  boxs[0].classList.toggle("animate");
  boxs[1].classList.toggle("animate");
});
// sidebarWidth
let openBtn = document.getElementById("openTap");
openBtn.addEventListener("click", function () {
  let sideBar = document.getElementById("navSide");
  sideBar.classList.toggle("changeWidth");
  document.getElementById("openTap").classList.replace("d-flex", "d-none");

  document.getElementById("closeTap").classList.replace("d-none", "d-flex");
});
let closeBtn = document.getElementById("closeTap");
closeBtn.addEventListener("click", function () {
  let sideBar = document.getElementById("navSide");
  sideBar.classList.toggle("changeWidth");
  document.getElementById("openTap").classList.replace("d-none", "d-flex");

  document.getElementById("closeTap").classList.replace("d-flex", "d-none");
});
// lodder
window.onload = () => {
  fadeOut();
};

function loader() {
  document.querySelector(".lodder-full").classList.add("active");
  document.querySelector(".page").classList.replace("d-none", "d-flex");
}

function fadeOut() {
  setTimeout(loader, 4000);
}
//nav phone

("use strict");

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");

  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});

// hover text
let elements = document.getElementsByClassName("alpha");

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener("animationend", function (e) {
    elements[i].classList.remove("animated");
  });

  elements[i].addEventListener("mouseover", function (e) {
    elements[i].classList.add("animated");
  });
}
