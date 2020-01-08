import chai from 'chai';
const expect = chai.expect;

import User from '../src/classes/User'

describe('User', function() {
  let user;

  beforeEach(() => {
    let eachUser = {
      id: 1,
      name: "Leatha Ullrich"
    }

    user = new User(eachUser);
  });

  it('should have access to the User class', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a User ID', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a name', function() {
    expect(user.name).to.equal("Leatha Ullrich");
  });

  it('should be able to login', function() {
  });

  it('should be able to bookRoom', function() {
  });

  it('should know its totalSpentMoney', function() {
  });

  it('should know its pastBookings', function() {
  });

  describe('', function() {
  });


});
