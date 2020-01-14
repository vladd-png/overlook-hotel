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
  bookRoom(roomNum) {
    //this should be a post request to bookings
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
}

export default User;
