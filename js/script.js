
// EMAIL

const registrati = ['a', 'e', 'i', 'o', 'u'];
const emailDaAggiungere = 1;

for (let i = 0; i < emailDaAggiungere; i++){
  const email = prompt('Digitare email');
  let emailcorretta = false;

  for (let e = 0; e < registrati.length; e++){
    const utentiregistrati = registrati[e];
    if(utentiregistrati === email){
      emailcorretta = true;
          console.log('accesso');

    }
  }
  if(! emailcorretta){
    console.log('negativo');
}
}

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


