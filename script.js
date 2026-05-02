const tarotCards = [
  {
    name: 'The Fool',
    description: 'A fresh start, new possibilities, and a leap of faith. The Fool encourages curiosity and trusting the journey ahead.',
    element: ['Air', 'Inspiration', 'Beginnings'],
    good: 'Opportunities for fresh starts and creative risk-taking are strong.',
    wrong: 'Carelessness or naivety may lead to poor choices if you avoid planning.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/RWS_Tarot_00_Fool.jpg',
    imageLink: 'https://en.wikipedia.org/wiki/The_Fool'
  },
  {
    name: 'The High Priestess',
    description: 'A symbol of intuition, inner knowledge, and secrets. The High Priestess invites patience and quiet reflection.',
    element: ['Water', 'Intuition', 'Mystery'],
    good: 'Great time to trust your intuition and uncover hidden truths.',
    wrong: 'Ignoring your inner voice may keep important answers out of reach.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/RWS_Tarot_02_High_Priestess.jpg',
    imageLink: 'https://en.wikipedia.org/wiki/The_High_Priestess'
  },
  {
    name: 'The Lovers',
    description: 'A card of choices, harmony, and partnership. The Lovers highlight meaningful relationships and values alignment.',
    element: ['Air', 'Connection', 'Choice'],
    good: 'Strong harmony and meaningful choices are possible now.',
    wrong: 'A poor choice or lack of honesty can create tension in relationships.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    imageLink: 'https://en.wikipedia.org/wiki/The_Lovers'
  }
];

const drawButton = document.getElementById('drawButton');
const resultSection = document.getElementById('result');
const cardImage = document.getElementById('cardImage');
const cardLink = document.getElementById('cardLink');
const cardName = document.getElementById('cardName');
const cardDescription = document.getElementById('cardDescription');
const cardElement = document.getElementById('cardElement');
const cardGood = document.getElementById('cardGood');
const cardWrong = document.getElementById('cardWrong');

function getRandomCard() {
  const index = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[index];
}

function showCard(card) {
  cardImage.src = card.imageUrl;
  cardImage.alt = `Tarot card image for ${card.name}`;
  cardLink.href = card.imageLink;
  cardName.textContent = card.name;
  cardDescription.textContent = card.description;
  cardGood.textContent = card.good;
  cardWrong.textContent = card.wrong;

  cardElement.innerHTML = '';
  card.element.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cardElement.appendChild(li);
  });

  resultSection.classList.remove('hidden');
}

function drawCard() {
  const card = getRandomCard();
  showCard(card);
}

drawButton.addEventListener('click', drawCard);
