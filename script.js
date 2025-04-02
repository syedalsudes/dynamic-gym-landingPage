const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSlider(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideElements.length;
  updateSlider(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
  updateSlider(currentIndex);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});



//..................................////////////////


const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});


//..............................................................\\\\\\


const trainers = [
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'John Doe', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Anatoly Prytytsky', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
  {name: 'Jane Smith', image: './publice/trainer1.png', instagram: 'https://www.instagram.com/yourusername', telegram: 'https://t.me/yourusername', youtube: 'https://www.youtube.com/c/yourchannel'},
];

const staffContainer = document.querySelector('.staff-blog');

// Dynamically create trainer elements
trainers.map(trainer => {
  const trainerElement = document.createElement('div');
  trainerElement.classList.add('staff-box2');

  trainerElement.innerHTML = `
      <img src="${trainer.image}" alt="trainer">
      <h1>${trainer.name}</h1>
      <div class="staff-icon">
          <a href="${trainer.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="${trainer.telegram}" target="_blank"><i class="fab fa-telegram"></i></a>
          <a href="${trainer.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>
      </div>
  `;

  staffContainer.appendChild(trainerElement);
});



//........................................................\\\\\


const advantages = [
  { icon: "publice/icon1.png", title: "15000 sq.m.", description: "A spacious gym for sports-a safe distance between exercise machines"},
  { icon: "./publice/icon2.png", title: "More than 200 equipment", description: "No queues at simulators. Premium equipment from Lifestyle. Hammer Strength, TechnoGym"},
  { icon: "./publice/icon3.png", title: "4 fitness zones", description: "From cardio to functional and cycle. Separate area for boxing and mix martial arts"},
  { icon: "./publice/icon4.png", title: "Round-the-clock operation", description: "The gym is open 24 hours a day, also works on all holiday and weekends"}
];

// Mapping through the advantages array and creating HTML dynamically
const advantageBox = document.getElementById('advantageBox');

advantages.map((advantage) => {
  const advantageItem = document.createElement('div');
  advantageItem.classList.add('advan-box2');

  advantageItem.innerHTML = `
      <img src="${advantage.icon}" alt="icon">
      <div class="box2-part">
          <h1>${advantage.title}</h1>
          <p>${advantage.description}</p>
      </div>
  `;

  advantageBox.appendChild(advantageItem);
});



//......................................................................\\\


const memberships = [
  {
      name: "Pass ‘Trial’",
      price: "$ 0",
      features: [
          "Acces to gym from 8:00 to 14:00",
          "The trainer on duty will introduce you to the gym"
      ]
  },
  {
      name: "Pass ‘Easy Start’",
      price: "$ 119",
      features: [
          "Visit without restrictions 24/7",
          "Individual training program",
          "Access to the VTRAINER application",
          "Trainer support"
      ]
  },
  {
      name: "Pass ‘Free Time’",
      price: "$ 49",
      features: [
          "The entrance time to the gym is from 14:00 to 16:00",
          "Without suspension of gym membership",
          "The trainer on duty will introduce you to the gym"
      ]
  },
  {
      name: "Pass ‘1 Month 24/7’",
      price: "$ 85",
      features: [
          "Visit without restrictions 24/7",
          "The trainer on duty will introduce you to the gym"
      ]
  },
  {
      name: "Pass ‘In Shape (AM)’",
      price: "$ 165",
      features: [
          "Training in mini-groups until 14:00",
          "Without suspension of gym membership",
          "Classes with a trainer in a mini-group 3 times a week",
          "Trainer support"
      ]
  },
  {
      name: "Pass ‘In Shape (PM)’",
      price: "$ 195",
      features: [
          "Training in mini-groups until 17:00",
          "Without suspension of gym membership",
          "Classes with a trainer in a mini-group 3 times a week",
          "Trainer support"
      ]
  }
];

// Mapping through the memberships array and creating HTML dynamically
const memberBox = document.getElementById('memberBox');

memberships.map((membership) => {
  const memberItem = document.createElement('div');
  memberItem.classList.add('member-box');

  memberItem.innerHTML = `
      <center>
          <h2>${membership.name}</h2>
      </center>
      <center>
          <h1>${membership.price}</h1>
      </center>
      <div class="member-box2">
          ${membership.features.map(feature => `<p>🗸 ${feature}</p>`).join('')}
          <button>Buy</button>
      </div>
  `;

  memberBox.appendChild(memberItem);
});




