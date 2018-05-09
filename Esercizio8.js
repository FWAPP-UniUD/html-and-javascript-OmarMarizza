const immagine = document.getElementById("immagine")

immagine.addEventListener("mouseover", MouseOver);
immagine.addEventListener("mouseout", MouseOut);
immagine.addEventListener("click", Click);
immagine.addEventListener("contextmenu", ContextMenu);

function MouseOver() {
    immagine.src = "https://findicons.com/files/icons/2841/very_emotional_emoticons_remastered_2014/128/37_y.png";
}

function MouseOut() {
    immagine.src = "https://findicons.com/files/icons/2841/very_emotional_emoticons_remastered_2014/128/42_y.png";
}

function Click() {
    immagine.src = "https://findicons.com/files/icons/2841/very_emotional_emoticons_remastered_2014/128/23_y.png";
}

function ContextMenu() {
    immagine.src = "https://findicons.com/files/icons/2841/very_emotional_emoticons_remastered_2014/128/30_y.png";
}