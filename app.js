const body = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const bgModal = document.querySelector(".bg");
const modalPackage = document.querySelector(".modal");
const selectBtn = document.querySelectorAll(".select");
const closeModal = document.getElementById("close-modal");
const packageArticle = document.querySelectorAll(".package__title");
const continueBtns = document.querySelectorAll(".countinue");
const successModal = document.querySelector(".success-modal");
const gotItBtn = document.getElementById("got-it");
const pladge = document.querySelectorAll(".pladge");
const total = document.getElementById("total-money");
const totalBacker = document.getElementById("total-backer");

function counting(value) {
  let sum = 89914;
  sum += +value;
  let currentBackers = 5007;
  currentBackers += 1;
  total.innerText = `$${sum}`;
  totalBacker.innerText = currentBackers;

  setSuccessModal();
}

//open/close menu
function toggleMenu() {
  menu.classList.toggle("show");
  bgModal.classList.toggle("show");
  if (menu.classList.contains("show")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
}
//open package modal
function openPackageModal() {
  modalPackage.classList.toggle("show");
  modalPackage.scrollIntoView();
}
//close package
function closePackageModal() {
  modalPackage.classList.remove("show");
}
//success modal
function setSuccessModal() {
  successModal.classList.toggle("show");
  modalPackage.classList.remove("show");
  bgModal.classList.toggle("show");
  window.scrollTo({
    left: 0,
    top: 0,
  });
  //set hidden overflow
  setTimeout(() => {
    body.style.overflow = "hidden";
  }, 500);
}
//return to the initial
function removeFinishModal() {
  successModal.classList.remove("show");
  bgModal.classList.remove("show");
  body.style.overflow = "visible";
}
//adding style for active package
function addActive(el, style) {
  el.classList.add(`${style}`);
}
//removing style from active package
function removeActive(el, style) {
  el.classList.remove(`${style}`);
}

//open pricing modal
packageArticle.forEach((element) => {
  element.addEventListener("click", (e) => {
    //selecting element for add "active" class
    const selectedPackage = e.currentTarget.parentElement;
    const pricing = selectedPackage.querySelector(".package__pricing");
    const checked = selectedPackage.querySelector(".o div");

    packageArticle.forEach((item) => {
      //selecting element for remove "active" class
      const package = item.parentElement;
      const pricingEl = package.querySelector(".package__pricing");
      const checkBtn = package.querySelector(".o div");

      if (package.classList.contains("active")) {
        removeActive(package, "active");
        removeActive(pricingEl, "show");
        removeActive(checkBtn, "check");
      } else {
        addActive(selectedPackage, "active");
        addActive(pricing, "show");
        addActive(checked, "check");
      }
    });
  });
});

//finis purchase
continueBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pladge.forEach((input) => {
      let pladge = input.dataset.pladge;
      let value = input.value;
      if (pladge === "25" && value >= "25") {
        counting(value);
      } else if (pladge === "75" && value >= "75") {
        counting(value);
      }
      input.value = "";
    });
  });
});

//Event Listeners
hamburger.addEventListener("click", toggleMenu);
closeModal.addEventListener("click", closePackageModal);
gotItBtn.addEventListener("click", removeFinishModal);

//open package modal
selectBtn.forEach((btn) => {
  btn.addEventListener("click", openPackageModal);
});
