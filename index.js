const { grahpql, buildSchema } = require('greaphql');


const schema = buildSchema(`
type Query {
  foo: String
}

type scheme {
  query: Query
}
`);

const resolvers = {
  foo: () => 'bar',
};

const query = `
query myFirstQuery {
  foo
 }`;