function enlargeImage() {  // Must be placed on PARENT element!
  document.getElementsByClassName("img-container")[0].style.transform = "scale(1.3)";
}

function shrinkImage() {  // Must be placed on PARENT element!
  document.getElementsByClassName("img-container")[0].style.transform = "scale(1)";
}
