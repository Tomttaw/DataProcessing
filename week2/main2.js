/* use this to test out your function */
window.onload = function() {
  changeColor("esp", "green");

	var mapdata = {
      "data" : 
      [
        {"gini_index": "27.6", "Country_code": "at"},
        {"gini_index": "25.9", "Country_code": "be"},
        {"gini_index": "35.4", "Country_code": "bg"},
        {"gini_index": "29.5", "Country_code": "ch"},
        {"gini_index": "34.8", "Country_code": "cy"},
        {"gini_index": "25.1", "Country_code": "cz"},
        {"gini_index": "30.7", "Country_code": "de"},
        {"gini_index": "27.7", "Country_code": "dk"},
        {"gini_index": "35.6", "Country_code": "ee"},
        {"gini_index": "34.5", "Country_code": "el"},
        {"gini_index": "34.7", "Country_code": "es"},
        {"gini_index": "25.6", "Country_code": "fi"},
        {"gini_index": "29.2", "Country_code": "fr"},
        {"gini_index": "30.2", "Country_code": "hr"},
        {"gini_index": "28.6", "Country_code": "hu"},
        {"gini_index": "30.8", "Country_code": "ie"},
        {"gini_index": "22.7", "Country_code": "is"},
        {"gini_index": "32.4", "Country_code": "it"},
        {"gini_index": "35", "Country_code": "lt"},
        {"gini_index": "28.7", "Country_code": "lu"},
        {"gini_index": "35.5", "Country_code": "lv"},
        {"gini_index": "35.2", "Country_code": "mk"},
        {"gini_index": "27.7", "Country_code": "mt"},
        {"gini_index": "26.2", "Country_code": "nl"},
        {"gini_index": "23.5", "Country_code": "no"},
        {"gini_index": "30.8", "Country_code": "pl"},
        {"gini_index": "34.5", "Country_code": "pt"},
        {"gini_index": "34.7", "Country_code": "ro"},
        {"gini_index": "38.6", "Country_code": "rs"},
        {"gini_index": "25.4", "Country_code": "se"},
        {"gini_index": "25", "Country_code": "si"},
        {"gini_index": "26.1", "Country_code": "sk"},
        {"gini_index": "", "Country_code": "tr"},
        {"gini_index": "31.6", "Country_code": "uk"}
        ]
    } 
	obj = JSON.parse(mapdata);
	console.log(obj); 
};

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    // get country by id
    var country = document.getElementById(id);
    
    // change color 
    country.style.fill=color; 


}