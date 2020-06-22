import express from 'express';
// Intialize the Express web server
const app = express();

app.get('/', (req, res) => {
  res.send('I love GraphQL!');
});

app.listen(8080, () => {console.log('GraphQL server running on port https://localhost:8080/graphql')});
