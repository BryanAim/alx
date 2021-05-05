document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById('smart_thumbnail');
  
  thumbnailElement.addEventListener("click", function() {
    // thumbnailElement.className = "";
    thumbnailElement.classList.toggle("small");

  })
  // if (thumbnailElement.className == "") {
  //   thumbnailElement.addEventListener("click", function() {
  //     thumbnailElement.className = "small";
  //   })
  // }
});