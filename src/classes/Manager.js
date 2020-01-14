import domUpdates from '../DOMupdates.js';
import User from './User';


class Manager extends User {
  constructor(data, name) {
    super(data);
    this.name = name;
    this.allUsers = [];
  }
  showDate(dn) {
    domUpdates.showDateForManager(dn);
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
