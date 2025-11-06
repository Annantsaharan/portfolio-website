const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Store submissions in a JSON file
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

// Initialize submissions file if it doesn't exist
async function initializeSubmissionsFile() {
  try {
    await fs.access(SUBMISSIONS_FILE);
  } catch {
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify([]));
  }
}

initializeSubmissionsFile();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { password } = req.body;
  
  // Replace this with your actual admin password
  const correctPassword = '$2a$10$uLi7s9yekNtyTFGkcSZfHOmWQlTwZ6WJmYEs6Wi1qb5OVNKbgSkoy';
  
  const validPassword = await bcrypt.compare(password, correctPassword);
  if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

  const token = jwt.sign({ role: 'admin' }, JWT_SECRET);
  res.json({ token });
});

// Submit contact form
app.post('/api/submit', async (req, res) => {
  try {
    const submission = {
      ...req.body,
      timestamp: new Date().toISOString()
    };

    const submissions = JSON.parse(await fs.readFile(SUBMISSIONS_FILE, 'utf8'));
    submissions.push(submission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    res.json({ message: 'Submission saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

// Get all submissions (protected route)
app.get('/api/submissions', authenticateToken, async (req, res) => {
  try {
    const submissions = JSON.parse(await fs.readFile(SUBMISSIONS_FILE, 'utf8'));
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Export submissions as CSV (protected route)
app.get('/api/submissions/export', authenticateToken, async (req, res) => {
  try {
    const submissions = JSON.parse(await fs.readFile(SUBMISSIONS_FILE, 'utf8'));
    
    // Convert to CSV
    const csvHeader = 'Timestamp,Name,Email,Message\n';
    const csvRows = submissions.map(s => 
      `"${s.timestamp}","${s.name}","${s.email}","${s.message.replace(/"/g, '""')}"`
    ).join('\n');
    
    const csv = csvHeader + csvRows;
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=submissions.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export submissions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});