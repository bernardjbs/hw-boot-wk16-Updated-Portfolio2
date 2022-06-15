// Navigation bar effects
const navHomeEl = document.querySelector('#nav-home');
const navAboutEl = document.querySelector('#nav-about');
const navExperienceEl = document.querySelector('#nav-experience');
const navPortfolioEl = document.querySelector('#nav-portfolio');
const navContactEl = document.querySelector('#nav-contact');

navHomeEl.addEventListener('click', () => {
  navHomeEl.style.color = 'white';
  navHomeEl.style.background = '#1f1f38';

  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navPortfolioEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navPortfolioEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)';
});

navAboutEl.addEventListener('click', () => {
  navAboutEl.style.color = 'white';
  navAboutEl.style.background = '#1f1f38';

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navPortfolioEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navPortfolioEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)';
});

navExperienceEl.addEventListener('click', () => {
  navExperienceEl.style.color = 'white';
  navExperienceEl.style.background = '#1f1f38';
  
  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)';
  
  navPortfolioEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navPortfolioEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)';
});

navPortfolioEl.addEventListener('click', () => {
  navPortfolioEl.style.color = 'white';
  navPortfolioEl.style.background = '#1f1f38';
  
  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)';
  
  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)';
});

navContactEl.addEventListener('click', () => {
  navContactEl.style.color = 'white';
  navContactEl.style.background = '#1f1f38';

  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navPortfolioEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navPortfolioEl.style.background = 'rgba(0, 0, 0, 0.3)';

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)';
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)';
});

// Hero section effects

imgOnEl = document.querySelector('#img-on');

imgEatEl = document.querySelector('#img-eat');
imgSleepEl = document.querySelector('#img-sleep');
imgCodeEl = document.querySelector('#img-code');
imgRepeatEl = document.querySelector('#img-repeat');

imgOnEl.addEventListener('click', () => {
  if (imgOnEl.classList.contains('hero-off')) {
    imgOnEl.classList.add('hero-on');
    imgOnEl.classList.remove('hero-off'); 
    console.log('animate hero')
    animateHero()
  } else if (imgOnEl.classList.contains('hero-on')) {
    imgOnEl.classList.add('hero-off');
    imgOnEl.classList.remove('hero-on');    
    console.log('clear interval')
    stopAnimate();
  }
})
  
let eatInterval = null;
let sleepInterval = null;
let codeInterval = null;
let repeatInterval = null;
let interval = 2000;

const animateHero = () => {
  eatInterval = setInterval(() => {
    imgEatEl.classList.add('animate-eat');
    console.log('eat')
  }, 2000);
  sleepInterval = setInterval(() => {
    imgSleepEl.classList.add('animate-sleep');
    console.log('sleep')
  }, 4000);
  codeInterval = setInterval(() => {
    imgCodeEl.classList.add('animate-code');
    console.log('code')
  }, 6000);
  repeatInterval = setInterval(() => {
    imgRepeatEl.classList.add('animate-repeat');
    console.log('repeat')
  }, 8000);
};

const stopAnimate = () => {
  imgEatEl.classList.remove('animate-eat');
  imgSleepEl.classList.remove('animate-sleep');
  imgCodeEl.classList.remove('animate-code');
  imgRepeatEl.classList.remove('animate-repeat');
  clearInterval(eatInterval);
  clearInterval(sleepInterval);
  clearInterval(codeInterval);
  clearInterval(repeatInterval);
}