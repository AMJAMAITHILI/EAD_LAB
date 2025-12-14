/*const express = require("express");
const app = express();

const userRoutes = require("./routes/users");


app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
*/
/*
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const SECRET = "mysecret";

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.json({ message: "Wrong credentials" });
  }
});

// Protected route
app.get("/profile", (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.json({ message: "No token" });
  
  try {
    const user = jwt.verify(token, SECRET);
    res.json({ message: "Profile", user });
  } catch {
    res.json({ message: "Invalid token" });
  }
});

app.listen(3000, () => console.log("Server on 3000"));
*/

/*
import ReactDOM from "react-dom";
import { useState } from "react";


export default function App() {
const [open, setOpen] = useState(false);


return (
<div>
<button onClick={() => setOpen(true)}>Open</button>


{open && ReactDOM.createPortal(
<div>
<p>Modal Window</p>
<button onClick={() => setOpen(false)}>Close</button>
</div>,
document.body
)}
</div>
);
}
*/

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow frontend to connect

// Middleware - runs before routes
function logger(req, res, next) {
  console.log(req.method);
console.log(req.url);
  console.log("Date:", new Date().toDateString());

  next(); // pass to next middleware/route
}

app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});