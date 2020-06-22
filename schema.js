// Create schemas for GraphQL
import { buildSchema } from 'graphql';

const schema = buildSchema(`
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
    getFriend(id: ID): Friend
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
  }
`);

export default schema;
