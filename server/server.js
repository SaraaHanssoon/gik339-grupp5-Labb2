// Importera Express.js
const express = require("express");
// Skapa en ny Express-app
const app = express();
// Definiera porten som servern ska lyssna på
const port = 3000;

// Importera SQLite3
const sqlite3 = require("sqlite3").verbose();
// Skapa en ny databasanslutning
const db = new sqlite3.Database("./gik339-labb2.db");

// Middleware för att tolka JSON-data
app.use(express.json());
// Middleware för att tolka URL-kodade data
app.use(express.urlencoded({ extended: false }));

// Middleware för att tillåta CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// GET-endpoint för "/users"
app.get("/users", (req, res) => {
    console.log("Request received for /users");
  
    // SQL-fråga för att hämta alla användare
    db.all("SELECT * FROM users", (err, rows) => {
      // Om det finns ett fel, logga det och skicka ett felmeddelande
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).send(err.message);
      }
  
      console.log("Users retrieved from the database:", rows);
      // Skicka användardata som svar
      res.send(rows);
    });
});

// Starta servern
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
