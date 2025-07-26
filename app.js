// const express = require('express');
// const mongoose = require('mongoose');
// const LoginData = require('./models/LoginData');
// const app = express();
// const cors = require('cors');


// const corsOptions = {
//   origin: 'http://localhost:5173',
//   credentials: true,
// };

// app.use(express.json());
// app.use(cors(corsOptions));


// mongoose
//   .connect('mongodb://127.0.0.1:27017/cinema_booking', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Mongo connection error:', err));

// // Register (signup user)
// app.post('/api/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     let user = await LoginData.findOne({ email });
//     if (user) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }
//     user = await LoginData.create({ name, email, password });
//     res.status(201).json({ name: user.name, email: user.email });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Login (authenticate user)
// app.post('/api/login', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = await LoginData.findOne({ email });
//     if (!user) return res.status(401).json({ error: 'Invalid credentials' });
//     // Optionally check name too if required
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     res.json({ name: user.name, email: user.email });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
