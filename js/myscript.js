let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){nextImage();}, 7000)

function nextImage(){
  count++;
  if(count > 4){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
  
}

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

const signIN = document.getElementById('sign-in-btn');

signIN.addEventListener('click', () =>{
  const form = document.getElementById('form');

  if(form.style.display === 'none'){
    form.style.display = 'flex';
  } else {
    form.style.display = 'none';
  }
})