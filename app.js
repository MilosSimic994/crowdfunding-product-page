const body = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const bgModal = document.querySelector(".bg");
const modalPackage = document.querySelector(".modal");
const selectBtn = document.querySelectorAll(".select");
const closeModal = document.getElementById("close-modal");
const packageArticle = document.querySelectorAll(".package");
const continueBtns = document.querySelectorAll(".countinue");
const successModal = document.querySelector(".success-modal");
console.log(successModal);
console.log(continueBtns);
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

//open package modal
selectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalPackage.classList.toggle("show");
    modalPackage.scrollIntoView();
    console.log("misa");
  });
});

//open pricing modal
packageArticle.forEach((element) => {
  element.addEventListener("click", (e) => {
    const selectedPackage = e.currentTarget;
    const pricing = selectedPackage.querySelector(".package__pricing");
    if (element !== selectedPackage) {
      element.classList.remove("active");
    }

    pricing.parentElement.classList.toggle("active");
    pricing.classList.toggle("show");
    // console.log(element);
    console.log(selectedPackage);
  });
});

//finis purchase

continueBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    successModal.classList.toggle("show");
    modalPackage.classList.remove("show");
    bgModal.classList.toggle("show");
    successModal.scrollIntoView();
    if (successModal.classList.contains("show")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  });
});

//Event LIsteners
hamburger.addEventListener("click", toggleMenu);
closeModal.addEventListener("click", closePackageModal);

console.log(selectBtn);
