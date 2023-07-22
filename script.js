const form = document.getElementById ('#form');
const nameInput = document.querySelector ('#name');
const emailInput  = document.querySelector ('email');
const messageTextarea = document.querySelector ('message');


function SpeechSynthesisErrorEvent(index){
  nameInput[index].style.border = '2px solid #e63636';
  emailInput[index].style.display = 'block';
}

function nameVlidate(){
  if(nameInput [0].value.length < 3)
  {
    setError(0);
  }
  else
  {
    console.log('VALIDADO O NOME')
  }

}