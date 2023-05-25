const category = document.querySelector("#category_wrapper");

category.addEventListener("click", (e) => {
  if (e.target.closest("figure") === null) return;
  allEvent(e.target.closest("figure"));
  skinEvent(e.target.closest("figure"));
  maskEvent(e.target.closest("figure"));
  makeupEvent(e.target.closest("figure"));
  suncareEvent(e.target.closest("figure"));
  bodyEvent(e.target.closest("figure"));
});

const itemList = document.querySelectorAll(".itemList");
const skinList = document.querySelector(".skinItemList");
const maskList = document.querySelector(".maskItemList");
const makeupList = document.querySelector(".makeupItemList");
const suncareList = document.querySelector(".suncareItemList");
const bodyItemList = document.querySelector(".bodyItemList");

const allEvent = (target) => {
  if (!target.classList.contains("all")) return;
  if (document.querySelector(".wrapper") !== null) {
    document.querySelector(".itemList").innerHTML = "";
  }
};

const skinEvent = (target) => {
  if (!target.classList.contains("skin")) return;
  itemList.classList.add(".hide");
};

const maskEvent = (target) => {
  if (!target.classList.contains("mask")) return;
  if (document.querySelector(".wrapper") !== null) {
    document.querySelector(".itemList").innerHTML = "";
  }
};

const makeupEvent = (target) => {
  if (!target.classList.contains("makeup")) return;
  if (document.querySelector(".wrapper") !== null) {
    document.querySelector(".itemList").innerHTML = "";
  }
};

const suncareEvent = (target) => {
  if (!target.classList.contains("suncare")) return;
  if (document.querySelector(".wrapper") !== null) {
    document.querySelector(".itemList").innerHTML = "";
  }
};

const bodyEvent = (target) => {
  if (!target.classList.contains("body")) return;
  if (document.querySelector(".wrapper") !== null) {
    document.querySelector(".itemList").innerHTML = "";
  }
};
