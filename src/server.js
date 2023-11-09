const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app1 = express();
const app2 = express();

const port1 = 3001;
const port2 = 3002;

app1.use(cors());
app1.use(bodyParser.json());

app1.post('/register', (req, res) => {
  const existingUsers = JSON.parse(fs.readFileSync('users.json', 'utf8'));
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  existingUsers.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(existingUsers));
  res.status(200).json({ message: 'User registered successfully' });
});

app2.use(cors());
app2.use(bodyParser.json());

app2.post('/login', (req, res) => {
  const existingUsers = JSON.parse(fs.readFileSync('src/users.json', 'utf8'));
  const { email, password } = req.body;

  console.log('Received login request:', { email, password });

  const user = existingUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app1.listen(port1, () => {
  console.log(`Server 1 is running on port ${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server 2 is running on port ${port2}`);
});
