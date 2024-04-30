const tel = document.querySelector(".tel");
const btn = document.querySelector(".btn");
const modul = document.querySelector(".modul");
const collection = document.querySelector(".collection");
const inputNumber = document.querySelector("#numbers");
const form = document.querySelector("form");
const Btns = document.querySelector(".modul__btn__cencel");
const BtnsAdd = document.querySelector(".modul__btn__add");

const TEL_NUMBERS = [
  "+998 93 876 6473",
  "+998 93 723 1232",
  "+998 93 098 9822",
  "+998 91 111 0929",
  "+998 94 231 9009",
  "+998 93 222 0229",
  "+998 94 111 8762",
  "+998 93 876 6473",
  "+998 93 723 1232",
  "+998 93 098 9822",
  "+998 91 111 0929",
  "+998 94 231 9009",
  "+998 93 222 0229",
  "+998 94 111 8762",
];

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  let interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
    tel.innerHTML = TEL_NUMBERS[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    btn.removeAttribute("disabled");
  }, 2000);
});

function creatItem(date) {
  while (collection.firstChild) {
    collection.firstChild.remove();
  }
  const fragment = document.createDocumentFragment();
  date.forEach((el) => {
    const li = document.createElement("li");
    li.innerHTML = el;
    fragment.appendChild(li);
  });
  collection.appendChild(fragment);
}

creatItem(TEL_NUMBERS);

Btns.addEventListener("click", function () {
  modul.classList.remove("show");
});

BtnsAdd.addEventListener("click", function () {
  modul.classList.remove("show");
});

function modulAdded() {
  modul.classList.toggle("show");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputAdd = inputNumber.value;
  TEL_NUMBERS.push(inputAdd);
  creatItem(TEL_NUMBERS);
});
