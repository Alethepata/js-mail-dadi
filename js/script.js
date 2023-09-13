
// EMAIL

const registrati = ['a', 'e', 'i', 'o', 'u'];
const EmailInput = document.getElementById('email');
const btnEmail = document.getElementById('btn');
const content = document.getElementById('risposta_1');
let message;


  btnEmail.addEventListener('click', function(){    
    const email = EmailInput.value;
    let emailcorretta = false;
  
    for (let e = 0; e < registrati.length; e++){
      const utentiregistrati = registrati[e];

      if(utentiregistrati === email){
        emailcorretta = true;
            message ='Sei in lista! Puoi accedere.';    
            content.classList.add('text-success');
      }
    }
    if(! emailcorretta){
        message ='Negativo! Non sei in lista.';
        content.classList.add('text-danger');
  }

    content.innerHTML=message;

    
})


// Dadi

const btnDadi = document.getElementById('btn-d');
const content2 = document.querySelector('.risposta_2');

btnDadi.addEventListener('click', function(){
  const giocatore = Math.ceil(Math.random() * 6);
  const computer = Math.ceil(Math.random()* 6); 
  
    if(giocatore > computer){
    message ='ha vinto il giocatore.';
    }else if(giocatore < computer){
    message='ha vinto il computer.';
    }else{
    message='siete pari.';
}
content2.innerHTML='Al giocatore è uscito ' + giocatore + ' , al computer è uscito ' + computer + '. Quindi ' + message;
})




