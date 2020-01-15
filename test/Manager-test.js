import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
import domUpdates from '../src/DOMupdates.js';
import Manager from '../src/classes/Manager'
import User from '../src/classes/User';



describe('Manager', function() {
  let manager, user, allBookings, room1, room2, room3, room4, allRooms;

  beforeEach(() => {
    user = new User('manager', '51')
    manager = new Manager('manager', 'overlook2019'),
    room1 = { number: 15, roomType: "residential suite", bidet: false, bedSize: "full", numBeds: 1, costPerNight: 294.56},
    room2 = { number: 24, roomType: "suite", bidet: false, bedSize: "queen", numBeds: 1, costPerNight: 327.24},
    room3 = { number: 12, roomType: "single room", bidet: false, bedSize: "twin", numBeds: 2, costPerNight: 172.09},
    room4 = { number: 14, roomType: "residential suite", bidet: false, bedSize: "twin", numBeds: 1, costPerNight: 457.88 },
    allRooms = [room1, room2, room3, room4],
    allBookings = [{
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 15,
      roomServiceCharges: [ ]
      },
      {
      id: "5fwrgu4i7k55hl6t5",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 24,
      roomServiceCharges: [ ]
      },
      {
      id: "5fwrgu4i7k55hl6t6",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 12,
      roomServiceCharges: [ ]
    }],
    user = {
      id: 9,
      name: "Leatha Ullrich",
      pastBookings: [allBookings]
    }
  })

  it('should show date on the page', function() {
    chai.spy.on(domUpdates, ['showDateForManager'], () => {});
    manager.showDate('2020/01/10');
    expect(domUpdates.showDateForManager).to.have.been.called(1);
  });

  it('should Be able to SearchForUser', function() {
    manager.createUserData(user);
    expect(manager.searchForUser(user.id)).to.deep.equal([user])
    //seperate test for create user data
  });

  it.skip('should be able to displayApology', function() {
  });

});
