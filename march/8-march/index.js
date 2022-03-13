document.querySelectorAll(".image-container").forEach((image) => {
    image.onclick = () => {
      document.querySelector(".popup-image").style.display = "block";
      document.querySelector(".popup-image img").src = image.getAttribute("src");
    };
  });
  
  document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
  };
  
  let image_container = document.getElementsByClassName("image");
  
  window.addEventListener("mouseup", function (event) {
    if (event.target != image_container) {
      document.querySelector(".popup-image").style.display = "none";
    }
  });
  