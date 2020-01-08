import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/classes/Booking'

describe('Booking', function() {
  let booking;

  beforeEach(() => {
    let eachBooking = {
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/02/04",
      roomNumber: 15,
      roomServiceCharges: []
    }

    booking = new Booking(eachBooking);
  });

  it('should have access to the Booking class', function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should have a Booking ID', function() {
    expect(booking.id).to.equal("5fwrgu4i7k55hl6sz");
  });

  it('should have a User ID', function() {
    expect(booking.userID).to.equal(9);
  });

  it('should store a Date', function() {
    expect(booking.date).to.equal("2020/02/04");
  });

  it('should have a Room Number', function() {
    expect(booking.roomNumber).to.equal(15);
  });

  it('should store Room Service charges', function() {
    expect(booking.roomServiceCharges).to.deep.equal([]);
  });

  describe('', function() {

  });


});
