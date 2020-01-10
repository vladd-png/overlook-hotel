// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import Booking from './classes/Booking.js';
import Frontdesk from './classes/Frontdesk.js';
import Manager from './classes/Manager.js';
import Room from './classes/Rooms.js';
import User from './classes/User.js';


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/forest-bg.jpg';
import './images/HH-logo.svg';
import './images/fairy.png';

let user, booking, manager, frontdesk;


// ----------------- variable declarations ------------------ //

const app = document.querySelector('#login-page');
const errorMsh = document.querySelector('#error-message');
const userName = document.querySelector('#user-name');

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
  if (userName.value === '') {
    $('#error-message').removeClass('hidden')
  } else {
    sortLogin();
  }
}

function sortLogin() {
  if (userName.value === 'manager') {
    loginManager();
  } else {
    loginGuest();
  }
}

function loginGuest() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(data => findUser(data.users))
}

function findUser(allUsers) {
  let id = parseInt(userName.value.split('r')[1]);
  let myUser = allUsers.find(user => {
    return user.id === id;
  });
  user = new User(myUser)
  console.log(user);
}

function loginManager() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(data => loadBookings(data.bookings))
    loadHotel();
}

function loadBookings(bookings) {
  bookings.forEach(booking => {
    let eachBooking = new Booking(booking);
    frontdesk.bookings.push(eachBooking);
  });
  // console.log(frontdesk.bookings);
}

function loadHotel() {
  frontdesk = new Frontdesk;
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json())
    .then(data => loadRooms(data.rooms))
}

function loadRooms(rooms) {
  rooms.forEach(room => {
    let eachRoom = new Room(room);
    frontdesk.rooms.push(eachRoom)
  });
  // console.log(frontdesk.rooms);
}

// ----------------- login functionality ------------------ //







//
