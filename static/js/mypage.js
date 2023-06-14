const diagnoseBtn = document.querySelector(".btn");

diagnoseBtn.addEventListener("click", (e) => {
  const uploadBox = document.querySelector(".contents");
  const container = document.querySelector(".type_wrapper");
  uploadBox.classList.add("hidden");
  setTimeout(() => container.classList.remove("hidden"), 2000);
  
  
});
