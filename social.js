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
    if(!this.users[userID1] || !this.users[userID2]) return false

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
    /*this.follows  =>
    {
  '1': Set { 2 },
  '2': Set { 3 },
  '3': Set { 4, 5 },
  '4': Set { 1, 2 },
  '5': Set { 6 },
  '6': Set {}
  }

  PLAN: e.g. user 1
  1. get the set of people userID (user 1) follows => '1': Set { 2 } => 2
  2. get the set of people 2 follows => '2': Set { 3 } => 3
      //degree 1 o/p => [3]
  3. get the set of people 3 follows => '3': Set { 4, 5 } => [4, 5]
      //degree 2 o/p => [3, 4, 5]
  4. get the set of people 4 follows => '4': Set { 1, 2 } => [1, 2] => ignored because they have already been considered
  5. get the set of people 5 follows => '5': Set { 6 } => [6]
      //degree 3 o/p => [3, 4, 5, 6]
  */

  }

}

module.exports = SocialNetwork;
