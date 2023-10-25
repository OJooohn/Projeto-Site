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

const signIN = document.getElementById('sign-in-btn');

signIN.addEventListener('click', () =>{
  const form = document.getElementById('form');

  if(form.style.display === 'none'){
    form.style.display = 'flex';
  } else {
    form.style.display = 'none';
  }
})