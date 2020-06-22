import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

// Intialize the Express web server
const app = express();

app.get('/', (req, res) => {
  res.send('I love GraphQL!');
});

// Create a resolver: a function that returns the query from GraphQL
const root = { hello: () => "Hello friend" };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(8080, () => {console.log('GraphQL server running on localhost:8080/graphql')});
