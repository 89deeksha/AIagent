const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const Agentroutes=require('./Routes/Agent')
require('./db')

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// Import your Scenario router
const scenarioRoutes = require('./Routes/Scenario'); // adjust path if needed

// Mount the router at /api
app.use('/api', scenarioRoutes);
app.use('/api',Agentroutes)
// Optional test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
