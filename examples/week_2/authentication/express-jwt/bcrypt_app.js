const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());

// secret key for jwt signing (change this to a secure random string)
const secretKey = "your-secret-key";

// dummy user database (connect with a real database)
const users = [];

app.post("/register", async (req, res) => {
  let { username, password, role } = req.body;

  const saltRounds = 10;

  password = await bcrypt.hash(password, saltRounds);
  console.log(password);

  const newUser = { id: users.length + 1, username, password, role };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully", newUser });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // find the user in the database
  const user = users.find((user) => user.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ message: "Invalid Credentials" });
  } else {
    // generate a JWT token

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      secretKey,
      {
        expiresIn: "15m", // token expiration time (adjust as needed)
      }
    );
    res.json({ token });
  }
});

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected Route Accessed", user: req.user });
});

app.get("/admin-protected", authenticateAdminToken, (req, res) => {
  res.json({ message: "Admin Route Accessed", user: req.user });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized Access" });
    return;
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Forbidden Access" });
      return;
    }
    req.user = user;
    next();
  });
  // next();
}

function authenticateAdminToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized Access" });
    return;
  }

  jwt.verify(token, secretKey, (err, user) => {
    console.log(user.role);
    if (err || user.role !== "admin") {
      res.status(403).json({ message: "Forbidden Access" });
      return;
    }
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
