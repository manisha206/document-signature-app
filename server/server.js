Step 6: Connect Route to server.js

Open:

server/server.js

Add this import near the top:

const documentRoutes = require("./routes/documentRoutes");

Example:

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");

Add this route before PORT:

app.use("/api/docs", documentRoutes);

Final section:

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/docs", documentRoutes);

const PORT = process.env.PORT || 5000;