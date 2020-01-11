// import Room from './Rooms.js';
// import Booking from './Booking.js'

class Frontdesk {
  constructor() {
    this.name = 'Hotel Hyrule';
    this.rooms = [];
    this.bookings = [];
  }
  populateHotel(rooms) {
    return this.bookings.push(rooms);
  }
  filterByRoomType() {

  }
  calculateRoomAvailability() {

  }
  removeBooking() {

  }
  addRoomToBooking() {

  }
  totalDaysRevenue(room) {
    let total = 0;
    this.bookings.forEach(booking => {
      console.log(booking.roomNumber);
      // total += rooms.number[booking.roomNumber]
    });
  }

}

export default Frontdesk;
