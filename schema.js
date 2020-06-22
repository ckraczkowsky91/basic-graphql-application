// Create schemas for GraphQL
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query{
    hello: String
  }
`);

export default schema;
