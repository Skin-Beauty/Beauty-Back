const diagnoseBtn = document.querySelector(".btn");

diagnoseBtn.addEventListener("click", (e) => {
  console.log("sss");
  const uploadBox = document.querySelector(".upload-box");
  const container = document.querySelector(".container");
  container.classList.remove("hidden");
  uploadBox.classList.add("hidden");
});
