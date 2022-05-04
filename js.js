const textBox = document.querySelector(".text-box");
const t1 = document.querySelector(".t-1");
const tanya = document.querySelector(".tnya");
const john = document.querySelector(".john");
const arrowLeft = document.querySelector(".arrow-l");
const arrowRight = document.querySelector(".arrow-r");

arrowRight.addEventListener("click", function () {
  console.log(2);
  john.classList.add("active");
  t1.classList.add("active");
  textBox.classList.add("active");
  tanya.classList.add("active");
});
arrowLeft.addEventListener("click", function () {
  john.classList.remove("active");
  t1.classList.remove("active");
  textBox.classList.remove("active");
  tanya.classList.remove("active");
});
