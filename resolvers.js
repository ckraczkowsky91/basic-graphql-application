class Friend {
  constructor(id, { firstName, lastName, age, gender, language, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.contacts = contacts;
  };
};
// Create object using in-memory database
const friendDatabase = {};

// Create a resolver: a function that gives us, i.e. returns, the result of the query to GraphQL
const resolvers = {
  getFriend: ({id}) => {
    return new Friend(id, friendDatabase[id]);
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    console.log(friendDatabase);
    return new Friend(id, input);
  }
};

export default resolvers;
