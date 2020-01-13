import { } from '../index.js'
import User from './User.js'

class Manager extends User {
  constructor(data, name) {
    super(data);
    this.name = name;
    this.allUsers = [];
  }
  createUserData(user) {
    this.allUsers.push(user)
  }
  searchForUser(userNum) {
    return this.allUsers.filter(user => {
      return user.id === userNum;
    })
  }
  addRoomForUser() {
  }
  deleteUsersReservation() {
    frontdesk.removeBooking(user);
  }
  displayApology() {
  }
}

export default Manager;
