
// EMAIL

const registrati = ['a', 'e', 'i', 'o', 'u'];
const emailDaAggiungere = 1;
const EmailInput = document.getElementById('email');
const btnEmail = document.getElementById('btn');
const content = document.getElementById('risposta_1');
let message;




  btnEmail.addEventListener('click', function(){    
    for (let i = 0; i < emailDaAggiungere; i++){
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
      }

    content.innerHTML=message;

    
})


// Dadi

const giocatore = Math.ceil(Math.random() * 6);
const computer = Math.ceil(Math.random()* 6);
console.log(giocatore);
console.log(computer);

if(giocatore > computer){
    console.log('Ha vinto giocatore');
}else if(giocatore < computer){
    console.log('Ha vinto computer');
}else{
    console.log('pari');
}


