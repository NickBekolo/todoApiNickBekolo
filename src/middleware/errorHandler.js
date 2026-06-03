const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.errors.map((error) => error.message),
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
};

module.exports = errorHandler;