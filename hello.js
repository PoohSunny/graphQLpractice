var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
    yeah: String!
  }
`);

var root = { hello: () => 'Hello world!', yeah: () => "" };

graphql(schema, '{ hello, yeah }', root).then((response) => {
  console.log(response);
});

