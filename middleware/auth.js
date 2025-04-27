const API_TOKEN = process.env.API_TOKEN;

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token || token !== `Bearer ${API_TOKEN}`) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing token' });
  }

  next();
};

module.exports = authMiddleware;
