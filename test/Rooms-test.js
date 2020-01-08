import chai from 'chai';
const expect = chai.expect;

import Rooms from '../src/classes/Rooms'

describe('Rooms', function() {
  let room;

  beforeEach(() => {
    let eachRoom = {
      number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
    }

    room = new Rooms(eachRoom);
  });

  it('should have access to the Rooms class', function() {
    expect(room).to.be.an.instanceOf(Rooms);
  });

  it('should have a Number', function() {
    expect(room.number).to.equal(1);
  });

  it('should have a roomType', function() {
    expect(room.roomType).to.equal("residential suite");
  });

  it('should know if there is a bidet', function() {
    expect(room.bidet).to.equal(true);
  });

  it('should know bedSize', function() {
    expect(room.bedSize).to.equal("queen");
  });

  it('should have numBeds', function() {
    expect(room.numBeds).to.equal(1);
  });

  it('should know its costPerNight', function() {
    expect(room.costPerNight).to.equal(358.4);
  });

  describe('', function() {

  });


});
