class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pastBookings = [];
  }
  bookRoom(roomNum) {
    //this should be a post request to bookings
  }
  totalSpentMoney() {

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
