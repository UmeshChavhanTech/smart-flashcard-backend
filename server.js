const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const flashcardRoutes = require('./routes/flashcards');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', flashcardRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
