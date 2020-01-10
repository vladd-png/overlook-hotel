class Booking {
  constructor(booking) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.roomNumber = booking.roomNumber;
    this.date = booking.date;
    this.roomServiceCharges = [];
  }
}

export default Booking;
