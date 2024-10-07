// our expertise

let expertisePopupContainer = document.getElementsByClassName("expertisePopupContainer")[0];
let expertisePopupContentElement = document.getElementById("expertisePopupContent");

function viewProject(e) {
  console.log(e);
  expertisePopupContainer.style.display = "block";
  expertisePopupContentElement.innerHTML = e.parentElement.parentElement.getElementsByClassName("expertisePopup")[0].innerHTML;
  
  // disable the vertical scroll of background body when popup open
  document.body.classList.add("stop-body-scrolling");
}

function expertisePopupClose() {
  expertisePopupContainer.style.display = "none";

  // enable the vertical scroll of background body when popup close
  document.body.classList.remove("stop-body-scrolling");
}
