const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/UserType');
const User = require('../../../service2/models/User');
const bcrypt = require('bcrypt');

module.exports = {
    type: UserType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
        // Check if the user with the provided email already exists.
        const existingUser = await User.findOne({ email: args.email });
        if (existingUser) {
            throw new Error('User with this email already exists.');
        }

        // Hash and salt the password before saving it.
        const hashedPassword = await bcrypt.hash(args.password, 10);

        // Create a new user and save it to the database.
        const user = new User({
            username: args.username,
            email: args.email,
            password: hashedPassword,
        });
        await user.save();

        return user;
    },
};
