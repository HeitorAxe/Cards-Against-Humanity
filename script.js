let whiteCards = [
  "Just once, I’d like to hear you say'Thanks, Mom.Thanks for'",
  "Life for American Indians was forever changed when the White Man introduced them to",
  "What’s a girl’s best friend?", 
  "The class field trip was completely ruined by",
  "I’m sorry, Professor, but I couldn’t complete my homework because of",
  "How did I lose my virginity?",
  "What’s my secret power?",
  "When Pharaoh remained unmoved, Moses called down a Plague of",
  "This season at Steppenwolf, Samuel Beckett’s classic existential play: Waiting for",
  "Instead of coal,Santa now gives the bad children ",
  "What is George W. Bush thinking about right now?",
  "What would grandma find disturbing, yet oddly charming?",
  
]

let blackCards = [
  "The prostate.",
  "Auschwitz.",
  "A bird that shits human turds.",
  "The female orgasm",
  "Sex with animals.",
  "Invading Poland.",
  "Nazis.",
  "Toxic masculinity.",
  "My balls on your face.",
  "Viagra.®",
  "Only dating Asian women.",
  "My inner demons.",
  "The placenta.",
  "Full frontal nudity",
  "Working in an Amazon warehouse.",
  "A fart so powerful that it wakes the giants from their thousand-year slumber.",
  "Former President George W. Bush."
]

let selected = false;


function createCard(value)//Creates a deck Card
{   
    const newCard = document.createElement('div');
    const newValue1 = document.createElement('span');
    const newValue2 = document.createElement('span');
    const newDescription = document.createElement('span');

    newCard.classList.add("deck-card");

    newValue1.classList.add('cardTopValue');
    newValue1.innerText = value+1;
    newCard.appendChild(newValue1);

    newDescription.classList.add('cardDescription');
    newDescription.innerText = blackCards[value];
    newCard.appendChild(newDescription);

    newValue2.classList.add('cardBottomValue');
    newValue2.innerText = value+1;
    newCard.appendChild(newValue2);
    
    return newCard;
}

function createCardDeck(value)//Creates a deck card and appends to deck
{   

    const deck = document.querySelector(".deck");
    const newCard = document.createElement('div');
    const newValue1 = document.createElement('span');
    const newValue2 = document.createElement('span');
    const newDescription = document.createElement('span');

    newCard.classList.add("deck-card");

    newValue1.classList.add('cardTopValue');
    newValue1.innerText = value+1;
    newCard.appendChild(newValue1);


    newDescription.classList.add('cardDescription');
    newDescription.innerText = blackCards[value];
    newCard.appendChild(newDescription);

    newValue2.classList.add('cardBottomValue');
    newValue2.innerText = value+1;
    newCard.appendChild(newValue2);
    newCard.onclick = function(){selectDeckCard(blackCards[value])}
    deck.appendChild(newCard);    

    return newCard;
}

function changeDisplayCard(value)//Takes a deck card as parameter and returns a display card
{


    const newDisplayCard = document.querySelector('.display-card');
    const value1 = newDisplayCard.querySelector('.cardTopValue');
    const value2 = newDisplayCard.querySelector('.cardBottomValue');
    const description = newDisplayCard.querySelector('.cardDescription');


    value1.innerText = value+1;
    description.innerText = whiteCards[value]+"...";
    value2.innerText = value+1;

    return newDisplayCard;
    

}

function takeCard()//Gets the card displayed and put into deck
{
    let w =Math.floor(Math.random() * whiteCards.length);
    let b =Math.floor(Math.random() * blackCards.length);
    deck = document.querySelector('.deck');
  
    let cardCount = deck.childElementCount;

    if(cardCount>=4)
    {
      deck.firstChild.remove();
    }

    createCardDeck(b);

    changeDisplayCard(w);
    selected=false;
}

function passCard()//Passes to the next displayed card
{
    let i =Math.floor(Math.random() * whiteCards.length);
    changeDisplayCard(i);

}

function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 5000);
}

function selectDeckCard(description)
{
    if(selected)
    {
      console.log("AlrealdySelectedCard");
    }
    else{
    const displayCard = document.querySelector('.display-card');
    const cardDescription = displayCard.querySelector(".cardDescription"); 
    cardDescription.innerText += description;
    selected = true;
      
    //Waits 1 second to execute takeCards, takeCards then sets selected to false
    setTimeout(takeCard, 1000);}
}


//Creating initial Cards;
let w =Math.floor(Math.random() * 7);
let b =Math.floor(Math.random() * 11);

changeDisplayCard(w);
createCardDeck(b);

const take = document.querySelector(".take");
const pass = document.querySelector(".pass");

take.onclick = function(){takeCard()}
pass.onclick = function(){passCard()}


