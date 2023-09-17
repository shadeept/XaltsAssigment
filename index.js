const express = require('express');
const { execSync } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({ result: 'Healthy', error: false });
});

app.get('/who', (req, res) => {
  try {
    const whoOutput = execSync('who').toString();
    res.json({ result: whoOutput, error: false });
  } catch (error) {
    res.json({ result: error.message, error: true });
  }
});

app.post('/create', (req, res) => {
  try {
    // Run the shell script to create or rewrite test.txt
    execSync('./createFile.sh');
    res.json({ result: 'File created or updated.', error: false });
  } catch (error) {
    res.json({ result: error.message, error: true });
  }
});

app.get('/read', (req, res) => {
  try {
    const fileContent = fs.readFileSync('test.txt', 'utf-8');
    res.json({ result: fileContent, error: false });
  } catch (error) {
    res.json({ result: 'File not found', error: true });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
