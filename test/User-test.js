import chai from 'chai';
const expect = chai.expect;

import User from '../src/classes/User'

describe('User', function() {
  let user, allBookings, room1, room2, room3, allRooms;

  beforeEach(() => {
    room1 = { number: 15, roomType: "residential suite", bidet: false, bedSize: "full", numBeds: 1, costPerNight: 294.56},
    room2 = { number: 24, roomType: "suite", bidet: false, bedSize: "queen", numBeds: 1, costPerNight: 327.24},
    room3 = { number: 12, roomType: "single room", bidet: false, bedSize: "twin", numBeds: 2, costPerNight: 172.09},
    allRooms = [room1, room2, room3],
    allBookings = [{
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/02/04",
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
      date: "2020/01/10",
      roomNumber: 12,
      roomServiceCharges: [ ]
    }];
    let eachUser = {
      id: 9,
      name: "Leatha Ullrich",
      pastBookings: [allBookings]
    }
    user = new User(eachUser);
  });

  it('should have access to the User class', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a User ID', function() {
    expect(user.id).to.equal(9);
  });

  it('should have a name', function() {
    expect(user.name).to.deep.equal("Leatha Ullrich");
  });

  it('should be able to bookRoom', function() {

  });

  it('should know its pastBookings', function() {
    user.checkPastBookings(allBookings, user.id);
    expect(user.pastBookings).to.deep.equal(allBookings);
  });

  it('should know its totalSpentMoney', function() {
    expect(user.totalSpentMoney(allRooms)).to.equal(793.89);
  });

});
