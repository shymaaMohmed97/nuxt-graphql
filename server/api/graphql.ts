import { ApolloServer } from "@apollo/server";
import { typeDefs } from "#graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateH3Handler(apollo);
