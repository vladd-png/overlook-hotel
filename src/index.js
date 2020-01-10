// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import Bookings from './classes/Booking.js';
import Frontdesk from './classes/Frontdesk.js';
import Manager from './classes/Manager.js';
import Rooms from './classes/Rooms.js';
import User from './classes/User.js';


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/forest-bg.jpg';
import './images/HH-logo.svg';
import './images/fairy.png';



// ----------------- variable declarations ------------------ //

const app = document.querySelector('#login-page');
// const loginBtn = document.querySelector('.login-btn');
const errorMsh = document.querySelector('#error-message');
const userName = document.querySelectorAll('.user-input').value;

// ----------------- event listeners ------------------ //

$('.login-btn').click(checkLogin);

// ----------------- fairy animation ------------------ //

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) { r = Math.random() * 100 }
  return r
}

for (let i = 40; i < 50; i++) {
  const delay = Math.random() + 's';
  const el = document.createElement('img')
  el.src = './images/fairy.png'
  el.className = 'glitter-fairy'
  el.style.top = myRand() + '%'
  el.style.left = myRand() + '%'
  el.style.animationDelay = delay
  el.style.msAnimationDelay = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay = delay
  app.appendChild(el)
}

// ----------------- login functionality ------------------ //

function checkLogin(event) {
  event.preventDefault();
  if (userName === undefined) { $('#error-message').removeClass('hidden') }
  else { console.log('access granted') }
    // showManagerLogin();
}
