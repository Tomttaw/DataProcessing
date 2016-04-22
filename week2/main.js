/* use this to test out your function */
window.onload = function() {
  changeColor("esp", "green");
  changeColor("fr", "yellow");
  changeColor("gre", "blue");
  changeColor("mdv", "pink");
};

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    // get country by id
    var country = document.getElementById(id);
    
    // change color 
    country.style.fill=color;    
}