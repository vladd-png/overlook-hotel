// import Room from './Rooms.js';
// import Booking from './Booking.js'

class Frontdesk {
  constructor() {
    this.name = 'Hotel Hyrule';
    this.rooms = [];
    this.bookings = [];
  }
  createRooms(rooms) {
    return this.rooms.push(rooms)
  }
  populateHotel(bookings) {
    return this.bookings.push(bookings);
  }
  filterByRoomType(size, date) {
    return this.rooms.reduce((acc, room) => {
      if(room.roomType === size && room.date === date) {
        acc.push(room)
      }
      return acc;
    }, [])
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
