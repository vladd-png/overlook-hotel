import chai from 'chai';
const expect = chai.expect;

import Frontdesk from '../src/classes/Frontdesk'
import Room from '../src/classes/Rooms'

describe('Frontdesk', function() {
  let frontdesk, room, room1, room2, roomNum2, roomNum7;

  beforeEach(() => {
    room1 = {number: 2, roomType: "suite", bidet: false, bedSize: "full", numBeds: 2, costPerNight: 477.38 };
    room2 = {number: 7, roomType: "single room", bidet: false, bedSize: "queen", numBeds: 2, costPerNight: 231.46 };
    roomNum2 = new Room(room1);
    roomNum7 = new Room(room2);
    frontdesk = new Frontdesk();
  });

  it('should have access to the Frontdesk class', function() {
    expect(frontdesk).to.be.an.instanceOf(Frontdesk);
  });

  it('should have a name', function() {
    expect(frontdesk.name).to.equal("Hotel Hyrule");
  });

  it('should keep track of rooms', function() {
    expect(frontdesk.rooms).to.deep.equal([roomNum2, roomNum7]);
  });

  describe('Should Filter by Room Type', function() {

  });

  describe('Should have Booking Data', function() {

    it('should keep track of bookings', function() {
      expect(frontdesk.bookings).to.deep.equal([]);
    });

    it('should calculateRoomAvailability', function() {

    });

    it('should removeBooking', function() {

    });

    describe('Should addRoomToBooking', function() {

    });
  });


});
