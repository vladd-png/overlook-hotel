import $ from 'jquery';
import Booking from './classes/Booking.js';
import Frontdesk from './classes/Frontdesk.js';
import Manager from './classes/Manager.js';
import Room from './classes/Rooms.js';
import User from './classes/User.js';
import domUpdates from './DOMupdates.js';
import './css/base.scss';
import './images/forest-bg.jpg';
import './images/HH-logo.svg';
import './images/fairy.png';
import './images/sunlight.svg';
import './images/avatar.png';

let user, booking, manager, frontdesk;
let dateNowResult, pickedRoom, formattedDateNum, roomID, managerDate;
let selectedReservation;

// ----------------- variable declarations ------------------ //

const app = document.querySelector('#login-page');
const errorMsg = document.querySelector('#error-message');
const guestName = document.querySelector('#search-name');
const roomType = document.querySelector('#rooms');
const userName = document.querySelector('#user-name');
const datePicked = document.querySelector('#datepicker');

// ----------------- event listeners ------------------ //

$('#login-btn').click(checkLogin);
$('.search-btn').click(findGuest);
$('#feb-btn').click(changeMonths);
$('#jan-btn').click(changeMonths);
$('.booking-form').click(changeUsersTab);
$('#jan-calendar').click(displayDate);
$('#feb-calendar').click(displayDate);
$('#room-btn').click(sortByRoomType);
$('#reset-btn').click(resetSelection);
$('.vertical-menu').click(showSelectedRoom);
$('#reso-btn').click(createReservation);
$('.title-logo').click(showHomePage);
$('.reservation-menu').click(showSelectedRoom);

$('#book-user-room').click(addBooking);
$('#remove-user-booking').click(removeUserReservation);
$('.book-btn').click(addRoomForUser);
$('#book-for-user').click(pickDate);
$('.past-res').click(showSelectedRoom);



// ----------------- helper functions ------------------ //

function checkLogin(event) {
  event.preventDefault();
  if (userName.value === '') {
    domUpdates.showError();
  } else {
    sortLogin();
  }
}

function sortLogin() {
  loadHotel();
  loginManager();
  formatDate();
  if (userName.value === 'manager') {
    domUpdates.loadManagerPage();
  } else {
    domUpdates.loadGuestPage();
    loginGuest();
    domUpdates.createCalendar();
  }
}

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
  el.alt = '8-bit fairy image'
  el.style.top = myRand() + '%'
  el.style.left = myRand() + '%'
  el.style.animationDelay = delay
  el.style.msAnimationDelay = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay = delay
  app.appendChild(el)
}

// ----------------- login functionality ------------------ //

function loginGuest() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(data => findUser(data.users))
    .catch(error => console.log(error))
}

function findUser(allUsers) {
  let id = parseInt(userName.value.split('r')[1]);
  let myUser = allUsers.find(user => {
    return user.id === id;
  });
  user = new User(myUser);
  user.showName(myUser);
}

function loginManager() {
  manager = new Manager('manager');
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(data => loadBookings(data.bookings))
    .then(() => displayRoomsAvailable())
    .then(() => calculateDaysRevenue())
    .catch(error => console.log(error))
}

function loadBookings(bookings) {
  bookings.forEach(booking => {
    let eachBooking = new Booking(booking);
    frontdesk.populateHotel(eachBooking);
  });
  createPieGraph(frontdesk.bookings);
}

function createPieGraph(bookings) {
  let totalRooms = 0;
  let unavailableRooms = 0;
  bookings.forEach(booking => {
    if (booking.date === dateNowResult) {
      totalRooms++;
    }
  })
  unavailableRooms = ((totalRooms / 25) * 360);
  domUpdates.buildPieGraph(unavailableRooms);
}

function formatDate() {
  $('#todays-date').text(``);
  dateNowResult = "";
  let d = new Date();
  let dn  = Date(Date.now()).toString();
  let month = (d.getMonth() + 1);
  if (month <= 9) {
    dateNowResult += d.getFullYear() + "/0" + (d.getMonth()+1) + "/" + d.getDate();
  } else {
    dateNowResult += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  }
  manager.showDate(dn);
}

function loadHotel() {
  frontdesk = new Frontdesk;
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json())
    .then(data => loadRooms(data.rooms))
    .catch(error => console.log(error))
}

function loadRooms(rooms) {
  rooms.forEach(room => {
    let eachRoom = new Room(room);
    frontdesk.createRooms(eachRoom);
  });
}

// ----- guest search functionality on manager page ---------- //

function findGuest() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json())
    .then(data => sortGuest(data.users))
    .catch(error => console.log(error))
}

function sortGuest(allUsers) {
  let id = parseInt(guestName.value.split('r')[1]);
  let myUser = allUsers.find(user => {
    return user.id === id;
  });
  user = new User(myUser)
  user.showUserData(user, frontdesk);
}

// ----------------- POST / DELETE user reservation ------------------ //

function addRoomForUser() {
  $('.dateInput').removeClass('hidden');
}

function pickDate() {
  let date = datePicked.value.split('-').join('/');
  domUpdates.showManagerRoomsAvailable(frontdesk, date);
}

function addBooking() {
  let date = datePicked.value.split('-').join('/');
  frontdesk.addRoomToBookingForManager(roomID, user, date);
}

function removeUserReservation() {
  $('#book-user-room').addClass('hidden');
  console.log(roomID);
  frontdesk.removeRoomFromBooking(roomID);
}

// ----------------- calendar functionality ------------------ //

function displayDate() {
  event.preventDefault();
  if (event.toElement.text === undefined) {
  } else if (event.toElement.className === 'jan') {
    $('.selected-date').html(`January ${event.toElement.text}, 2020`);
    formattedDateNum = `2020/01/${event.toElement.text}`;
  } else {
    $('.selected-date').html(`February ${event.toElement.text}, 2020`);
    formattedDateNum = `2020/02/${event.toElement.text}`;
  }
  domUpdates.showRoomsAvailable(frontdesk, formattedDateNum);
}


// ----------------- guest functionality ------------------ //
function changeUsersTab(event) {
  if (event.target.innerText === 'Past Reservations') {
    domUpdates.changeToPastTab();
    user.showPastBookings(frontdesk.bookings, dateNowResult);
  } else if (event.target.innerText === 'Upcoming Reservations') {
    domUpdates.changeToFutureTab();
    user.showFutureBookings(frontdesk.bookings, dateNowResult);
  } else {
    domUpdates.changeToBookTab();
  }
}

function sortByRoomType() {
  let chosenRoom = roomType.options[roomType.selectedIndex].value;
  let roomsAvaialble = frontdesk.filterByRoomType(chosenRoom, formattedDateNum);
  domUpdates.sortByRoomType(roomsAvaialble);
}

function showSelectedRoom(event) {
  event.target.style.backgroundColor = 'rgb(7, 37, 38)';
  event.target.style.color = 'white';
  pickedRoom = (event.target.text).split(' ');
  roomID = event.target.id;
  selectedReservation = frontdesk.findReservation(event, user);
}

function resetSelection(event) {
  $('.selected-date').html(``);
  $('.room-links').children('a').remove();
  event.target.style.backgroundColor = '';
}

function createReservation() {
  frontdesk.addRoomToBooking(selectedReservation, formattedDateNum, user);
}

function changeMonths() {
  domUpdates.changeMonths();
}

function showHomePage() {
  domUpdates.showHomePage();
}

// ----------------- manager login funcitonality ------------------ //

function displayRoomsAvailable() {
  frontdesk.findFullRooms(dateNowResult);
  let freeRooms = 25 - frontdesk.unavailableRooms.length
  domUpdates.displayRoomAvailability(freeRooms);
}

function calculateDaysRevenue() {
  let totalRevenue = (frontdesk.totalDaysRevenue(dateNowResult)).toFixed(2);
  domUpdates.calculateDaysRevenue(totalRevenue);
}

//
