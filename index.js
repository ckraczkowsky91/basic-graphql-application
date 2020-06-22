import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';
import resolvers from './resolvers';

// Intialize the Express web server
const app = express();

app.get('/', (req, res) => {
  res.send('I love GraphQL!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(8080, () => {console.log('GraphQL server running on localhost:8080/graphql')});
