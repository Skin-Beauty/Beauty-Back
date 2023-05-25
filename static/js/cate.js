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
  skinList.classList.remove("hide");
  maskList.classList.remove("hide");
  makeupList.classList.remove("hide");
  suncareList.classList.remove("hide");
  bodyItemList.classList.remove("hide");
};

const skinEvent = (target) => {
  if (!target.classList.contains("skin")) return;
  skinList.classList.remove("hide");
  maskList.classList.add("hide");
  makeupList.classList.add("hide");
  suncareList.classList.add("hide");
  bodyItemList.classList.add("hide");
};

const maskEvent = (target) => {
  if (!target.classList.contains("mask")) return;
  skinList.classList.add("hide");
  makeupList.classList.add("hide");
  suncareList.classList.add("hide");
  bodyItemList.classList.add("hide");
  maskList.classList.remove("hide");
};

const makeupEvent = (target) => {
  if (!target.classList.contains("makeup")) return;
  maskList.classList.add("hide");
  skinList.classList.add("hide");
  suncareList.classList.add("hide");
  bodyItemList.classList.add("hide");
  skinList.classList.add("hide");
  makeupList.classList.remove("hide");
};

const suncareEvent = (target) => {
  if (!target.classList.contains("suncare")) return;
  maskList.classList.add("hide");
  makeupList.classList.add("hide");
  skinList.classList.add("hide");
  bodyItemList.classList.add("hide");
  suncareList.classList.remove("hide");
};

const bodyEvent = (target) => {
  if (!target.classList.contains("body")) return;
  maskList.classList.add("hide");
  makeupList.classList.add("hide");
  suncareList.classList.add("hide");
  skinList.classList.add("hide");
  bodyItemList.classList.remove("hide");
};
