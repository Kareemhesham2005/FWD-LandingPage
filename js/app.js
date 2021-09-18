const mySections = document.querySelectorAll("section");
const myUl = document.querySelector("#navbar__list");
const myLi = document.querySelectorAll("li");
document
  .getElementById("section1")
  .appendChild(document.createElement("button"));
const myButton = document.querySelector("button");

for (section of mySections) {
  let myNewLi = document.createElement("li");
  let myNewLink = document.createElement("a");
  myNewLink.textContent = section.dataset.nav;
  myNewLi.appendChild(myNewLink);
  myUl.appendChild(myNewLi);
}
let a = document.querySelectorAll("a");
a[0].setAttribute("data-link", "section1");
a[1].setAttribute("data-link", "section2");
a[2].setAttribute("data-link", "section3");
a[3].setAttribute("data-link", "section4");

a.forEach((link) => {
  link.addEventListener("click", function () {
    const element = document.getElementById(link.getAttribute("data-link"));
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

window.addEventListener("scroll", () => {
  let myPosition = "";

  mySections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      myPosition = section.getAttribute("id");
    }
  });
  mySections.forEach((section) => {
    section.classList.remove("your-active-class");
    if (myPosition === section.getAttribute("id")) {
      document.getElementById(myPosition).classList.add("your-active-class");
    }
  });
  a.forEach((link) => {
    link.classList.remove("activeLink");
    if (myPosition === link.getAttribute("data-link")) {
      link.classList.add("activeLink");
    }
  });
});

myButton.textContent = "Back to Top";
myButton.classList.add("btn");

window.onscroll = () => {
  if (window.pageYOffset >= 500) {
    myButton.classList.add("btn-show");
  } else {
    myButton.classList.remove("btn-show");
  }
};

document.querySelector("main header").setAttribute("id", "header");

myButton.addEventListener("click", () => {
  document.getElementById("header").scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "end",
  });
});
