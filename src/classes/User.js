import domUpdates from '../DOMupdates.js';

class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pastBookings = [];
  }
  showName(user) {
    domUpdates.showGuestName(user);
  }
  showUserData(user, frontdesk) {
    domUpdates.populateData(user, frontdesk);
  }
  totalSpentMoney(allRooms) {
    let total = 0;
    allRooms.forEach(room => {
      total += room.costPerNight;
    })
    return total;
  }
  checkPastBookings(bookings, user) {
    bookings.forEach(booking => {
      if(booking.userID === user) {
        this.pastBookings.push(booking)
      }
    });
  }
  showFutureBookings(bookings, date) {
    let dateNum = Number(date.split('/').join(''));
    bookings.forEach(booking => {
      let bookDate = Number(booking.date.split('/').join(''))
      if(booking.userID === this.id && bookDate >= dateNum) {
        domUpdates.showFutureBookings(booking);
      }
    })
  }
  showPastBookings(bookings, date) {
    let dateNum = Number(date.split('/').join(''));
    bookings.forEach(booking => {
      let bookDate = Number(booking.date.split('/').join(''))
      if(booking.userID === this.id && bookDate < dateNum) {
        domUpdates.showPastBookings(booking);
      }
    })
  }
}

export default User;
