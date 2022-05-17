// lisätään kaikkiin listan esineisiin poisto-nappi
var kommenttilista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < kommenttilista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "poisto";
  span.appendChild(txt);
  kommenttilista[i].appendChild(span);
}
// poisto-nappia painamalla piilotetaan listan esine
var poisto = document.getElementsByClassName("poisto");
var i;
for (i = 0; i < poisto.length; i++) {
  poisto[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// luodaan uusi lista esine kun painetaan lisää nappia
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Sinun täytyy kirjoittaa jotain!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "poisto";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < poisto.length; i++) {
    poisto[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
