const poemTitle = document.querySelector('.poem-title');
const poemLines = document.querySelector('.poem-lines');
const prevBtn = document.getElementById('prev-poem');
const nextBtn = document.getElementById('next-poem');

const poems = [
  // Replace with your poem objects (title and content)
  { title: "Poem Title 1", content: "It's been as long talking\nI can't describe here\nMany things changed a lot\nExcept one that I still care\nThe time flew very fast\nFeels like I met you yesterday\nAll was good till evening\nThen the new moon 🌑 appeared\nAll went blurry and you out of my sight\nI blamed God for it and the dark night\nTill I knew the moon wasn't new\nIt was behind the clouds brought by you 💔\n\nIt's okay you don't love me\nBut not the way i found it\nIt got hurt to know your side\nMy whole body cried except the eyes\nEverything just went worse\nI could neither cry nor curse\nI could feel my heart being shattered\nEqual to number of dreams with you\nEvery piece screaming out loud\nTrying to heal in the name of you\nNow my feelings for you\nWent from gibbous 🌔 to new 🌑\nLike the shooting star returned\nAfter I wished for you\n\nI can't forget the moments\nI dreamt of with you\nI wanna feel the warmth\nOf first hug with you\nEveryone has a story with a missing character\nI wanted that missing character to be you\nBut it couldn't be true\nSo I wrote a whole new story with you\nAnd it was going good\nTill I found that\nYou were secretly burning the book\n\nAs now the book is fully burnt\nThe story has ended\nBut I feel we both somewhere failed\nYou couldn't love and I can't forget\nI am tired now and gave up\nI don't have energy to start a new\nI will be part of story rather to include someone\nTill then I will wait for only you\nThis time I won't write any story\nI be that missing character of started one\nWish for you to start the story\nAnd hope this time the star don't return" },
  { title: "Poem Title 2", content: "Your poem content here..." },
  // Add more poems as objects
];

let currentPoemIndex = 0;

function showPoem() {
    const poem = poems[currentPoemIndex];
    poemLines.textContent = poem.content; // Set poem content directly
    poemLines.classList.add('show'); // Add class to show poem
  }
  

showPoem();

prevBtn.addEventListener('click', () => {
  currentPoemIndex--;
  if (currentPoemIndex < 0) {
    currentPoemIndex = poems.length - 1;
  }
  showPoem();
});

nextBtn.addEventListener('click', () => {
  currentPoemIndex++;
  if (currentPoemIndex >= poems.length) {
    currentPoemIndex = 0;
  }
  showPoem();
});
