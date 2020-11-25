const title = document.querySelector("h2");

const colorsArray = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const functionObj = {
  mouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  windowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  mouseRightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseenter",functionObj.mouseEnter);
title.addEventListener("mouseleave",functionObj.mouseLeave);
window.addEventListener("resize",functionObj. windowResize);
window.addEventListener("contextmenu",functionObj.mouseRightClick);