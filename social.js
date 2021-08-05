// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Fill this out
    //'1' : {'id': 1, 'name': 'John Doe'}
    this.currentID++

    let user = {};
    user.id = this.currentID;
    user.name = name;

    let id = this.currentID
    this.users[id] = user;
    this.follows[id] = new Set();

    return this.currentID;

  }

  getUser(userID) {
    if (this.users[userID] === undefined) return null;

    return this.users[userID];
  }

  follow(userID1, userID2) {
    if(this.users[userID2] === undefined) return false

    this.follows[userID1].add(userID2);
    return true;

  }

  getFollows(userID) {

    return this.follows[userID];

  }

  getFollowers(userID) {
    //this.follows => { '1': Set { 2 }, '2': Set {} }
    //need to check if any other user follows the given userID

    let followers = new Set();
    for (let key in this.follows) {
      if(this.follows[key].has(userID)) {
        followers.add(Number(key))
      }
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {

    // Fill this out

  }

}

module.exports = SocialNetwork;
