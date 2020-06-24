import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './data/schema';

// Intialize the Express web server
const app = express();

app.get('/', (req, res) => {
  res.send('I love GraphQL!');
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(8080, () => {console.log('GraphQL server running on localhost:8080/graphql')});
