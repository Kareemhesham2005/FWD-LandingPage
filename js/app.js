const mySections = document.querySelectorAll("section");
const myUl = document.querySelector("#navbar__list");
const myLi = document.querySelectorAll("li");
const myButton = document.createElement("button");
document.getElementById("section1").before(myButton);

for (section of mySections) {
  let myNewLi = document.createElement("li");
  let myNewLink = document.createElement("a");
  myNewLink.textContent = section.dataset.nav;
  myNewLi.appendChild(myNewLink);
  myUl.appendChild(myNewLi);
}
let a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
  a[i].setAttribute("data-link", `section${i + 1}`);
}

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

myButton.textContent = "Up";
myButton.classList.add("btn");

window.onscroll = () => {
  if (window.pageYOffset >= 500) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
