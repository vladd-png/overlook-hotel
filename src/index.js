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
import './images/sunlight.svg';
import './images/avatar.png';

let user, booking, manager, frontdesk;
let dateNowResult;


// ----------------- variable declarations ------------------ //

const app = document.querySelector('#login-page');
const errorMsh = document.querySelector('#error-message');
const userName = document.querySelector('#user-name');
const guestName = document.querySelector('#search-name');

// ----------------- event listeners ------------------ //

$('.login-btn').click(checkLogin);
$('.search-btn').click(findGuest);
$('.test').click(filterRooms);
$('#calendar').click(displayDate);
$('#book').click(changeToBookTab);
$('#past').click(changeToPastTab);
$('#future').click(changeToFutureTab);

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
  loadHotel();
  if (userName.value === 'manager') {
    loadManagerPage();
    loginManager();
  } else {
    loadGuestPage();
    loginGuest();
    createCalendar();
  }
}

function loadManagerPage() {
  $('#login-page').addClass('hidden').removeClass('visible');
  $('#manager-page').removeClass('hidden').addClass('visible');
}

function loadGuestPage() {
  $('#login-page').addClass('hidden').removeClass('visible');
  $('#guest-page').removeClass('hidden').addClass('visible');
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
  user = new User(myUser);
  showName(myUser);
  // console.log(user);
}

function loginManager() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(data => loadBookings(data.bookings))
}

function loadBookings(bookings) {
  bookings.forEach(booking => {
    let eachBooking = new Booking(booking);
    frontdesk.populateHotel(eachBooking);
  });
  createPieGraph(frontdesk.bookings);
}

function createPieGraph(bookings) {
  formatDate();
  let totalRooms = 0;
  let unavailableRooms;
  let eachDate = bookings.forEach(booking => {
    if (booking.date === dateNowResult) {
      totalRooms++;
    }
    unavailableRooms = ((totalRooms / 25) * 360);
  })
  if (unavailableRooms > 180) {
    $('#pie').html(`<div class="pie-segment" style="--offset: 0; --value: 180"></div>`);
  }
  $('#pie').append(`<div class="pie-segment" style="--offset: 0; --value: ${unavailableRooms}"></div>`);
}

function formatDate() {
  dateNowResult = "";
  // dateDisplay = "";
  let d = new Date();
  let dn  = Date(Date.now()).toString();
  let month = (d.getMonth() + 1);
  if (month <= 9) {
    dateNowResult += d.getFullYear()+"/0"+(d.getMonth()+1)+"/"+d.getDate();
  } else {
    dateNowResult += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
  }
  for(var i = 0; i < 15; i++) {
    $('#todays-date').append(dn[i])
  }
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
    frontdesk.createRooms(eachRoom);
  });
}

// ----------------- guest search functionality ------------------ //

function findGuest() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(data => sortGuest(data.users))
}

function sortGuest(allUsers) {
  let id = parseInt(guestName.value.split('r')[1]);
  let myUser = allUsers.find(user => {
    return user.id === id;
  });
  user = new User(myUser)
  populateData(user);
}

function populateData(user) {
  $('.past-res').text(user.pastBookings);
  $('.guest-revenue').text(user.id);
}

// ----------------- calendar functionality ------------------ //


function createCalendar() {
  let d = new Date();
  let month = (d.getMonth());
  let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $('.calendar-month').text(allMonths[month]);
}

function displayDate() {
  event.preventDefault();
  if (event.toElement.text === undefined) {
  } else {
  $('.selected-date').html(`January ${event.toElement.text}, 2020`)
  }
}


// ----------------- guest functionality ------------------ //

function filterRooms() {
  console.log(frontdesk.filterByRoomType());
}

function showName(user) {
  $('.guest-name').html(`<div class="fade-in">Welcome Back ${user.name}</div>`);
}

function changeToBookTab() {
  $('#book-room').removeClass('hidden');
  $('#past-rooms').addClass('hidden');
  $('#future-rooms').addClass('hidden');
  $('#book').removeClass('inactive-tab');
  $('#past').addClass('inactive-tab');
  $('#future').addClass('inactive-tab');
}

function changeToPastTab() {
  $('#past-rooms').removeClass('hidden');
  $('#book-room').addClass('hidden');
  $('#future-rooms').addClass('hidden');
  $('#past').removeClass('inactive-tab');
  $('#book').addClass('inactive-tab');
  $('#future').addClass('inactive-tab');
}

function changeToFutureTab() {
  $('#future-rooms').removeClass('hidden');
  $('#past-rooms').addClass('hidden');
  $('#book-room').addClass('hidden');
  $('#future').removeClass('inactive-tab');
  $('#past').addClass('inactive-tab');
  $('#book').addClass('inactive-tab');
}
