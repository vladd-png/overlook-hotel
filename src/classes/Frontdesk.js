import Room from './Rooms.js';

class Frontdesk {
  constructor() {
    this.name = 'Hotel Hyrule';
    this.rooms = [];
    this.bookings = [];
  }
  populateHotel() {

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
