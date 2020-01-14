import chai from 'chai';
const expect = chai.expect;

import Frontdesk from '../src/classes/Frontdesk';
import Room from '../src/classes/Rooms';

describe('Frontdesk', function() {
  let frontdesk, room, room1, room2, booking1, booking2, booking3;

  beforeEach(() => {
    room1 = new Room ({number: 2, roomType: "suite", bidet: false, bedSize: "full", numBeds: 2, costPerNight: 477.38 });
    room2 = new Room ({number: 7, roomType: "single room", bidet: false, bedSize: "queen", numBeds: 2, costPerNight: 231.46 });
    frontdesk = new Frontdesk(),
    booking1 = {
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 2,
      roomServiceCharges: [ ]
    },
    booking2 = {
      id: "5fwrgu4i7k55hl6t5",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 7,
      roomServiceCharges: [ ]
    },
    booking3 = {
      id: "5fwrgu4i7k55hl6t6",
      userID: 9,
      date: "2020/01/24",
      roomNumber: 12,
      roomServiceCharges: [ ]
    }
  });

  it('should have access to the Frontdesk class', function() {
    expect(frontdesk).to.be.an.instanceOf(Frontdesk);
  });

  it('should have a name', function() {
    expect(frontdesk.name).to.equal("Hotel Hyrule");
  });

  it('should keep track of rooms', function() {
    frontdesk.createRooms(room1);
    frontdesk.createRooms(room2);
    expect(frontdesk.rooms).to.deep.equal([room1, room2]);
  });

  describe('Should Filter by Room Type', function() {

    it('should filter in rooms that match', function() {
      frontdesk.createRooms(room1);
      frontdesk.createRooms(room2);
      expect(frontdesk.filterByRoomType('suite', '2020/01/24')).to.deep.equal([room1])
    });

    it('should filter out rooms that do not match', function() {
      frontdesk.createRooms(room1);
      frontdesk.createRooms(room2);
      expect(frontdesk.filterByRoomType('junior suite', '2020/01/24')).to.deep.equal([])
    });

  });

  describe('Should have Booking Data', function() {

    it('should keep track of bookings', function() {
      frontdesk.populateHotel(booking1);
      frontdesk.populateHotel(booking2);
      frontdesk.populateHotel(booking3);
      expect(frontdesk.bookings).to.deep.equal([booking1, booking2, booking3]);
    });

    it('should calculateRoomAvailability', function() {
      frontdesk.createRooms(room1);
      frontdesk.createRooms(room2);
      frontdesk.populateHotel(booking1);
      frontdesk.populateHotel(booking2);
      frontdesk.populateHotel(booking3);
      frontdesk.findFullRooms('2020/01/24');
      expect(frontdesk.totalDaysRevenue('2020/01/24')).to.equal(708.84);

    });
  });

  it.skip('should removeBooking', function() {

  });

  it.skip('Should addRoomToBooking', function() {

  });


});
