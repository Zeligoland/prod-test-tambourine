// Obteniendo elementos del HTML

const leftButton = document.getElementById('button-container-left');
const rightButton = document.getElementById('button-container-right');
const cardTitle = document.getElementById('section2__card-title');
const cardText = document.getElementById('section2__card-text--p');
const cardImage = document.getElementById('section2__card-img');
const cardNumber = document.getElementById('section2__card-number');

// Array with the information of every card

const contentData = [
  {
    title: 'Amazing Cinema',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed erat sed nunc ultrices ultrices.',
    number: '01',
    imageSrc: 'url("./assets/cinema-img.jpg")',
  },
  {
    title: 'Stunning Location',
    text: 'From the picturesque Linear Park to the sprawling and elegant Grande Ballroom, Reunion Resort & Golf Club offers gorgeous ceremony settings.',
    number: '02',
    imageSrc: 'url("./assets/resort-img-color.jpg")',
  },
  {
    title: 'Uniqualed Rooms',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed erat sed nunc ultrices ultrices.',
    number: '03',
    imageSrc: 'url("./assets/room-img.jpg")',
  },
];

function updateContent() {
  const currentContent = contentData[currentIndex];
  
  cardTitle.textContent = currentContent.title;
  cardText.textContent = currentContent.text;
  cardNumber.textContent = currentContent.number;
  cardImage.style.backgroundImage = currentContent.imageSrc;
}

let currentIndex = 1;

rightButton.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= contentData.length) {
    currentIndex = 0;
  }
  updateContent();
});

leftButton.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = 2;
  }
  updateContent();
});

updateContent();
