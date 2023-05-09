const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;// indique si une carte est retournée
let lockBoard = false;// indiqiue si le plateau est verrouillé pour empecher une carte de se retourner
let firstCard, secondCard;// verifie si les 2 cartes se correspondent

function flipCard() {
  if (lockBoard) return;
  if( this === firstCard) return;

  this.classList.add('flip');
 //flipCard cette fonction retourne une carte, enregistre la premiere carte
//retourné et met à jour le jeu pour indiqué qu'une carte à été retourné.


  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
 
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disablecards () : unflipcards();
  return;
  
}

function disablecards() {
  firstCard.removeEventListener('click', flipCard.length, card++);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipcards() { 
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  },1500 );
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}// rcard,reinitialise les variables hasflipped, lockboard, firstcard et secondcard.

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 6);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
  });
