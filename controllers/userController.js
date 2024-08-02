const db = require('../db');

const addUser = (req, res) => {
  const { username, department } = req.body;
  db.query('INSERT INTO users (username, department) VALUES (?, ?)', [username, department], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'User added successfully.' });
    }
  });
};

const getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { addUser, getUsers };
