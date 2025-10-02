// server.js
// Jalankan: npm init -y && npm i express
// lalu: node server.js

const express = require('express');
const path = require('path');
const app = express();

// FLAG (bisa diganti atau ambil dari env var)
const FLAG = 'L4F{user-agent_mastery_L4F}';

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Route /flag
app.get('/flag', (req, res) => {
  const ua = req.headers['user-agent'] || '';
  if (ua.includes('L4F')) {
    res.send(`
      <!doctype html>
      <html>
        <head><meta charset="utf-8"><title>Flag</title></head>
        <body style="font-family:system-ui,Arial; padding:24px;">
          <h1>Congrats!</h1>
          <p>Flag: <code>${FLAG}</code></p>
        </body>
      </html>
    `);
  } else {
    res.send(`
      <!doctype html>
      <html>
        <head><meta charset="utf-8"><title>No Flag</title></head>
        <body style="font-family:system-ui,Arial; padding:24px;">
          <h1>Tidak ada flag di sini</h1>
        </body>
      </html>
    `);
  }
});

// fallback: semua route lain arahkan ke index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
