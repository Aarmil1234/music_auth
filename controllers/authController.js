const { hashPassword, successResponse, errorResponse } = require('../helper/index');
const User = require('../models/user');
const { comparePassword } = require('../helper/index');

exports.login = async (req, res) => {
    let { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return errorResponse(res, 'Invalid email or password');
        }

        // Compare password with the stored hashed password
        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return errorResponse(res, 'Invalid email or password');
        }

        let data = {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
        return successResponse(res, "Login Succesfully", data);

    } catch (error) {
        return errorResponse(res, 'Something went wrong', 500);
    }
};
