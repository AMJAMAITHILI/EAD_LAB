const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const users = [];
//15th snippet part
//15th snippet 
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// 3rd snippet
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  users.push({ id: users.length + 1, username, password });
  res.json({ success: true, message: 'User registered', userCount: users.length });
});

app.get('/users', (req, res) => res.json(users));

// 4th snippet
app.get('/api/calc/:operation', (req, res) => {
  const { operation } = req.params;
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) return res.status(400).json({ error: 'num1 and num2 must be numbers' });

  let result;
  switch (operation) {
    case 'add': result = num1 + num2; break;
    case 'subtract': result = num1 - num2; break;
    case 'multiply': result = num1 * num2; break;
    case 'divide':
      if (num2 === 0) return res.status(400).json({ error: 'Division by zero' });
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ operation, num1, num2, result });
});

// 13th snippet
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  const { title } = req.query;
  const greeting = title ? `Hello ${title} ${name}` : `Hello ${name}`;
  res.json({ greeting });
});

// 14th snippet
let products = [
  { id: 'p1', name: 'Pen', category: 'Stationery', price: 10 },
  { id: 'p2', name: 'Notebook', category: 'Stationery', price: 50 },
];

app.get('/products/:id', (req, res) => {
  const p = products.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

app.post('/products', (req, res) => {
  const { id, name, category, price } = req.body;
  if (!id || !name) return res.status(400).json({ error: 'id and name required' });
  products.push({ id, name, category, price });
  res.status(201).json({ success: true });
});
//15th snippet 
// /info route
app.get('/info', (req, res) => res.json({ message: 'Server Information Route Accessed' }));

// /status route
app.get('/status', (req, res) => {
  res.status(200).json({
    statusCode: 200,          
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});
//for undefined routes->
// catch-all MUST be last
app.use((req, res) => res.status(404).json({ error: 'Route not found', path: req.originalUrl }));

app.listen(4000, () => console.log('Server running on 4000'));
