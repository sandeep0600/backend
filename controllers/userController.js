const pool = require('../db');

const addUser = (req, res) => {
  const { username, department } = req.body;
  pool.query('INSERT INTO users (username, department) VALUES ($1, $2)', [username, department], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'User added successfully.' });
    }
  });
};

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

module.exports = { addUser, getUsers };
