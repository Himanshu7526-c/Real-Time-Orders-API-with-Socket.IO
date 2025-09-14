
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());

//  Connect DB (must call the function)
connectDB();

// Routes (pass io to routes)
app.use("/orders", orderRoutes(io));

// Socket.io connection
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
