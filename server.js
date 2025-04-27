require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const auth = require('./middleware/auth');

const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth);
// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
