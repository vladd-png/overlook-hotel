import chai from 'chai';
const expect = chai.expect;

import Frontdesk from '../src/classes/Frontdesk'

describe('Frontdesk', function() {
  let frontdesk;

  beforeEach(() => {
    frontdesk = new Frontdesk();
  });

  it('should have access to the Frontdesk class', function() {
    expect(frontdesk).to.be.an.instanceOf(Frontdesk);
  });

  it('should have a name', function() {
    expect(frontdesk.name).to.equal("Hotel Hyrule");
  });

  it('should keep track of rooms', function() {
    expect(frontdesk.rooms).to.deep.equal([]);
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
