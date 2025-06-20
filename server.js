const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated AI response
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log("User said:", userMessage);

  const aiResponse = `You said: "${userMessage}". I'm a simulated AI.`;

  res.json({ reply: aiResponse });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
