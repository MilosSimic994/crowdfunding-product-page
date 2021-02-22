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
function removeFinishModal() {
  successModal.classList.remove("show");
  bgModal.classList.remove("show");
  body.style.overflow = "visible";
}

//open package modal
selectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalPackage.classList.toggle("show");
    modalPackage.scrollIntoView();
    console.log("misa");
  });
});

//open pricing modal
//ovo su sel;ektovani naslovi
packageArticle.forEach((element) => {
  element.addEventListener("click", (e) => {
    const selectedPackage = e.currentTarget.parentElement;
    //div sa inputom
    const pricing = selectedPackage.querySelector(".package__pricing");

    packageArticle.forEach((item) => {
      const package = item.parentElement;
      const pricingEl = package.querySelector(".package__pricing");
      if (package.classList.contains("active")) {
        item.parentElement.classList.remove("active");
        pricingEl.classList.remove("show");
      } else {
        selectedPackage.classList.add("active");
        pricing.classList.add("show");
      }
    });
    //tu dodajem klasu da ih prikaze
    // pricing.classList.toggle("show");
  });
});

//finis purchase

continueBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pladge.forEach((input) => {
      let pladge = input.dataset.pladge;
      let value = input.value;
      if (pladge === "25" && value >= "25") {
        setSuccessModal();
        counting(value);
      } else if (pladge === "75" && value >= "75") {
        setSuccessModal();
      }
    });
  });
});

//Event LIsteners
hamburger.addEventListener("click", toggleMenu);
closeModal.addEventListener("click", closePackageModal);
gotItBtn.addEventListener("click", removeFinishModal);
console.log(selectBtn);
