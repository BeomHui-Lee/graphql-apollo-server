const database = require("./database");
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    teams: [Team]
    equipments: [Equipment]
    userlist: [UserList]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type UserList {
    id: String
    name: String
    username: String
    mobileNumber: String
  }
`;
const resolvers = {
  Query: {
    teams: () => database.teams,
    equipments: () => database.equipments,
    userlist: () => database.userlist,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
