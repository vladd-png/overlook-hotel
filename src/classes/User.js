class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pastBookings = [];
  }
  bookRoom(roomNum) {
    let eachRoom = {room: roomNum}
    this.pastBookings.push(eachRoom);
    return this.pastBookings;
  }
  totalSpentMoney() {

  }
  checkPastBookings() {

  }
}

export default User;
