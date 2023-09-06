const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const signUpMutation = require('./mutations/signup');
const loginMutation = require('./mutations/login');
const UserType = require('./types/UserType');
const User = require('../../service2/models/User');

// Define the RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType, // UserType represents the User object
            args: { id: { type: GraphQLString } }, // Arguments for the query
            resolve(parent, args) {
                // Resolve function to fetch and return a user based on the provided ID
                return User.findById(args.id);
            },
        },
    },
});


// Define the Root Mutation
const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        signUp: signUpMutation, // Import the signUp mutation
        login: loginMutation,   // Import the login mutation
    },
});

// Define the GraphQL schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
