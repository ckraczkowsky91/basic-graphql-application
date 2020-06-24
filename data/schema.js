// Create schemas for GraphQL
// import { buildSchema } from 'graphql';
import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Email{
    id: ID!,
    email: String
  }

  type Friend{
    id: ID,
    firstName: String,
    lastName: String,
    age: Int,
    gender: Gender
    language: String,
    emails: [Email]
    contacts: [Contact]
  }

  type Alien{
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  type Contact{
    firstName: String
    lastName: String
  }

  enum Gender{
    MALE
    FEMALE
    OTHER
  }

  type Query{
    getOneFriend(id: ID!): Friend
    getAliens: [Alien]
  }

  input FriendInput{
    id: ID,
    firstName: String!,
    lastName: String,
    age: Int,
    gender: Gender
    language: String,
    email: String
    contacts: [ContactInput]
  }

  input ContactInput{
    firstName: String
    lastName: String
  }

  type Mutation{
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
