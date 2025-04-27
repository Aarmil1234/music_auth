const bcrypt = require('bcryptjs');

const saltRounds = 10;

const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, saltRounds);
};

const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

const fetchById = async (Model, id) => {
    return await Model.findById(id);
};

const fetchAll = async (Model, filter = {}, projection = null, options = {}) => {
    return await Model.find(filter, projection, options);
};

const createDoc = async (Model, data) => {
    const doc = new Model(data);
    return await doc.save();
};

const successResponse = (res, message, data = null) => {
    return res.status(200).json({
        status: 200,
        message,
        data
    });
};

const errorResponse = (res, message = 'Something Went Wrong', statusCode = 400, details = null) => {
    return res.status(statusCode).json({
        status: statusCode,
        message,
        details
    });
};

module.exports = {
    hashPassword,
    comparePassword,

    fetchById,
    fetchAll,
    createDoc,

    successResponse,
    errorResponse,
};
