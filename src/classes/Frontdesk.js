// import Room from './Rooms.js';
// import Booking from './Booking.js'

class Frontdesk {
  constructor() {
    this.name = 'Hotel Hyrule';
    this.rooms = [];
    this.bookings = [];
    this.unavailableRooms = [];
  }
  createRooms(rooms) {
    return this.rooms.push(rooms)
  }
  populateHotel(bookings) {
    return this.bookings.push(bookings);
  }
  findFullRooms(date) {
    this.unavailableRooms = [];
    return this.bookings.filter(booking => {
      if (booking.date === date) {
        this.unavailableRooms.push(booking.roomNumber);
      }
    });
  }
  findEmptyRooms() {
    return this.rooms.reduce((acc, room) => {
      if(!this.unavailableRooms.includes(room.number)) {
        acc.push(room);
      }
      return acc;
    }, [])
  }
  filterByRoomType(size, date) {
    this.findFullRooms(date);
    console.log(this.unavailableRooms);
    return this.rooms.reduce((acc, room) => {
      if(room.roomType === size) {
        if(!this.unavailableRooms.includes(room.number)) {
          acc.push(room);
        }
      }
      console.log(acc);
      return acc;
    }, []);
  }
  calculateRoomAvailability() {

  }
  removeBooking() {

  }
  addRoomToBooking(user) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
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
