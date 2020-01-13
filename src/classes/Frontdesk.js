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
    this.bookings.filter(booking => {
      if (booking.date === date && !this.unavailableRooms.includes(booking.roomNumber)) {
        this.unavailableRooms.push(booking.roomNumber);
      }
    });
  }
  findEmptyRooms() {
    this.findFullRooms();
    return this.rooms.reduce((acc, room) => {
      if(!this.unavailableRooms.includes(room.number)) {
        acc.push(room);
      }
      return acc;
    }, [])
  }
  filterByRoomType(size, date) {
    this.findFullRooms(date);
    return this.rooms.reduce((acc, room) => {
      if(room.roomType === size) {
        if(!this.unavailableRooms.includes(room.number)) {
          acc.push(room);
        }
      }
      return acc;
    }, []);
  }
  removeBooking(user) {

  }
  addRoomToBooking(user) {
    console.log(user);
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    // .then()
  }
  totalDaysRevenue(date) {
    let total = 0;
    this.rooms.forEach(room => {
      for(var i =0; i< this.rooms.length; i++) {
        if(room.number === this.unavailableRooms[i]) {
          total += room.costPerNight;
        }
      }
    });
    return total;
  }
}

export default Frontdesk;
