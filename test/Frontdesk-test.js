import chai from 'chai';
const expect = chai.expect;

import Frontdesk from '../src/classes/Frontdesk'
import Room from '../src/classes/Rooms'

describe('Frontdesk', function() {
  let frontdesk, room, room1, room2;

  beforeEach(() => {
    room1 = new Room ({number: 2, roomType: "suite", bidet: false, bedSize: "full", numBeds: 2, costPerNight: 477.38 });
    room2 = new Room ({number: 7, roomType: "single room", bidet: false, bedSize: "queen", numBeds: 2, costPerNight: 231.46 });
    frontdesk = new Frontdesk();
  });

  it('should have access to the Frontdesk class', function() {
    expect(frontdesk).to.be.an.instanceOf(Frontdesk);
  });

  it('should have a name', function() {
    expect(frontdesk.name).to.equal("Hotel Hyrule");
  });

  it('should keep track of rooms', function() {
    expect(frontdesk.rooms).to.deep.equal([room1, room2]);
  });

  describe('Should Filter by Room Type', function() {

    it('should filter only rooms that match', function() {
      console.log(frontdesk);
      expect(frontdesk.filterByRoomType('full', '2020/01/24')).to.equal([room1])
    });

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
