module.exports = (schema) => {
  return (req, res, next) => {
    // If body is empty, trigger validation errors for required fields
    if (!req.body || Object.keys(req.body).length === 0) {
      const requiredFields = Object.keys(schema.describe().keys);
      // Return the full custom error message for the first required field
      const firstField = requiredFields[0];
      const firstErrorMessage = schema.validate({ [firstField]: '' }).error.details[0].message;
      return res.status(400).json({
        status: 400,
        message: firstErrorMessage // Send the custom validation error message for the first required field
      });
    }

    // Validate the body
    const { error } = schema.validate(req.body, {
      abortEarly: true, // Stop validation on the first error
      stripUnknown: true // Remove fields not in the schema
    });

    if (error) {
      // Return only the custom message of the first validation error
      return res.status(400).json({
        status: 400,
        message: error.details[0].message // The full message from the schema
      });
    }

    next();
  };
};