import Booking from './Booking.js';


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
  findReservation(e, user) {
    let resoThatMatches;
    this.rooms.forEach(room => {
      if(room.number === Number(e.target.id) && !this.unavailableRooms.includes(room.number)) {
        resoThatMatches = room;
      } else {
        if(room.number === Number(e.target.id)) {
          resoThatMatches = room;
        }
      }
    })
    return resoThatMatches;
  }
  addRoomToBooking (reservation, date, user) {
    let newBooking = {
      'userID': user.id,
      'date': date,
      'roomNumber': reservation.number
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking),
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
  addRoomToBookingForManager (roomID, user, date) {
    console.log(date);
    let newBooking = {
      'userID': user.id,
      'date': date,
      'roomNumber': roomID
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking),
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
  removeRoomFromBooking (id) {
    let idObject = {
      'id': id
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idObject),
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
  totalDaysRevenue(date) {
    let total = 0;
    this.rooms.forEach(room => {
      for(var i = 0; i < this.rooms.length; i++) {
        if(room.number === this.unavailableRooms[i]) {
          total += room.costPerNight;
        }
      }
    });
    return total;
  }
}

export default Frontdesk;
