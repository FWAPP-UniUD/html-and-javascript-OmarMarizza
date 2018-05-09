const place = document.getElementById("place");	
function Seek() { 
  const new_paragraph = document.createElement('p');
  const new_child = document.createTextNode("Lorem ipsum...");
  new_paragraph.appendChild(new_child);
  document.getElementById("place").appendChild(new_paragraph);	
  if(place) {
    place.appendChild(new_paragraph);
  }
  place.style.visibility = "visible";
}
document.querySelector("button")[0].addEventListener("click", Seek);

function Hide(){
  if(place.style.visibility === 'visible'){
    place.style.visibility = "hidden"
  }
}
document.querySelector("button")[1].addEventListener("click", Hide);