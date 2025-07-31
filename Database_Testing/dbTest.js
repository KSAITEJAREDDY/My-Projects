const sqlite3 = require('sqlite3').verbose();
const assert = require('assert');

// Connect to database (in-memory or file)
const db = new sqlite3.Database(':memory:');

// Setup and test
db.serialize(() => {
  // Create table
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');

  // Insert user
  const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  stmt.run('testuser', 'password123');
  stmt.finalize();

  // Test case: verify user exists
  db.get('SELECT * FROM users WHERE username = ?', ['testuser'], (err, row) => {
    if (err) throw err;
    assert.strictEqual(row.username, 'testuser');
    assert.strictEqual(row.password, 'password123');
    console.log('✅ Database read/write test passed.');
  });
});

// Close db on exit
process.on('exit', () => db.close());
