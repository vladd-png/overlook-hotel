import $ from 'jquery';

let domUpdates = {
  showError() {
    $('#error-message').removeClass('hidden');
  },
  // --------------------------- Manager Functionality -----------------
  loadManagerPage() {
    $('#login-page').addClass('hidden').removeClass('visible');
    $('#manager-page').removeClass('hidden').addClass('visible');
    $('#logo-for-manager').removeClass('hidden');
  },
  buildPieGraph(unavailableRooms) {
    if (unavailableRooms >= 180) {
      $('#pie').html(`<div class="pie-segment" style="--offset: 0; --value: ${unavailableRooms}"></div>`);
    }
    $('#pie').append(`<div class="pie-segment" style="--offset: 0; --value: 180"></div>`);
  },
  showDateForManager(date) {
    for(var i = 0; i < 15; i++) {
      $('#todays-date').append(`${date[i]}`);
    }
  },
  populateData(user, frontdesk) {
    $('.past-res').html(`<a class="active">All Reservations</a>`);
    let totalSpent = 0;
    let usersPastBookings = user.checkPastBookings(frontdesk.bookings, user.id);
    user.pastBookings.forEach(booking => {
      let eachRoom = frontdesk.rooms[booking.roomNumber];
      totalSpent += eachRoom.costPerNight;
      $('.past-res').append(`<a href="#">Room ${booking.roomNumber} on ${booking.date} for $${eachRoom.costPerNight} a night.</a>`);
      $('.guest-revenue').html(`${user.name} is $${totalSpent.toFixed(2)}`);
    })
  },
  createCalendar() {
    let d = new Date();
    let month = (d.getMonth());
    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $('.calendar-month').text(allMonths[month]);
    $('.feb-month').text(allMonths[1]);
  },
  displayRoomAvailability(freeRooms) {
    if(freeRooms === 1) {
      $('#rooms-available').html(`<p>There  Is ${freeRooms} Room Availble Today`);
    } else {
      $('#room-avail').html(`<p>There Are ${freeRooms} Rooms Availble Today`);
    }
    $('#hotel-occ').html(`${100 - freeRooms}% Occupied`);
  },
  // --------------------------- Guest Functionality -----------------
  loadGuestPage() {
    $('#login-page').addClass('hidden').removeClass('visible');
    $('#guest-page').removeClass('hidden').addClass('visible');
  },
  showGuestName(user) {
    $('.guest-name').html(`<div class="fade-in">Welcome Back ${user.name}</div>`);
  },
  showRoomsAvailable(frontdesk, date) {
    $('.room-links').children('a').remove();
    frontdesk.findFullRooms(date);
    let roomsAvaialble = frontdesk.findEmptyRooms();
    roomsAvaialble.forEach(room => {
      $('.room-links').append(`<a href="#">A ${room.roomType} is available for $${room.costPerNight} a Night</a>`);
    });
  },
  changeMonths() {
    $('#feb-calendar').toggleClass('hidden');
    $('#jan-calendar').toggleClass('hidden');
    $('#jan-btn').toggleClass('hidden');
    $('#feb-btn').toggleClass('hidden');
  },
  showHomePage() {
    $('#login-page').removeClass('hidden').addClass('visible');
    $('#guest-page').addClass(' hidden').removeClass('visible');
    $('#manager-page').addClass('hidden').removeClass('visible');
    $('#logo-for-manager').addClass('hidden').removeClass('visible');
  },
  calculateDaysRevenue(totalRevenue) {
    $('#todays-revenue').html(`$ ${totalRevenue}`)
  }
}

export default domUpdates;