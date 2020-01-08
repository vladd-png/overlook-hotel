class Manager extends User {
  constructor(name, password) {
    super(name, password);
  }
  searchForUser() {
    this.id
  }
  addRoomForUser() {
    this.bookRoom();
  }
  deleteUsersReservation() {
    frontdesk.removeBooking();
  }
  checkOccupiedRooms() {
    frontdesk.calculateRoomAvailability();
  }
  totalDaysRevenue() {
    frontdesk.bookings[cost * days];
  }
  checkRoomAvailability() {
    frontdesk.bookings.length;
  }
  displayApology() {

  }
}

module.exports = Manager;
