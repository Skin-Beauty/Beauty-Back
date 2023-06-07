const diagnoseBtn = document.querySelector(".btn");

diagnoseBtn.addEventListener("click", (e) => {
  const uploadBox = document.querySelector(".contents");
  const container = document.querySelector(".type_wrapper");
  container.classList.remove("hidden");
  uploadBox.classList.add("hidden");
});
