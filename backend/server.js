import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server is Ready"));
 
app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);
// POST - /api/users -Register a user
// POST - /api/users/auth -Authenticate user and get token
// POST /api/users/logout - Logout user and clear cookie
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update profile