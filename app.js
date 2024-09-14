const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Initialize Express app
const app = express();
const port = 3000; // Correct port variable

// mongoose connection url
const url = "mongodb+srv://swatitiwarim1220:oQkVwfLlgiThXcbW@cluster0.v2pq7.mongodb.net/users?retryWrites=true&w=majority";

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Cluster");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Import routes
const membershipRoutes = require('./routes/membership');
const booksRoutes = require('./routes/books');
const moviesRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');

// Use routes
app.use('/memberships', membershipRoutes);
app.use('/books', booksRoutes);
app.use('/movies', moviesRoutes);
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
    res.send('Library Management System API');
});

// Listen on the correct port variable
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Connect to the database after defining the app
connectToDatabase();
