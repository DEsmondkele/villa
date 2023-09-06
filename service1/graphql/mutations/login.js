const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/UserType');
const User = require('../../../service2/models/User');
const bcrypt = require('bcrypt');
const {sign} = require("jsonwebtoken");

module.exports = {
    type: GraphQLString,
    args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
        // Find the user by email.
        const user = await User.findOne({ email: args.email });

        if (!user) {
            throw new Error('User not found');
        }

        // I Compare the provided password with the stored hashed password.
        const validPassword = await bcrypt.compare(args.password, user.password);

        if (!validPassword) {
            throw new Error('Invalid password');
        }

        // Generate a JWT token upon successful login.
        return sign({userId: user.id}, 'my-secret-key', {
            expiresIn: '1h',
        });
    },
};
