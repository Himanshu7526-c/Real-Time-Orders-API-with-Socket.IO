const { io } = require("socket.io-client");

// Connect to server with auto-reconnect options
const socket = io("http://localhost:3000");

// Successful connection
socket.on("connect", () => {
  console.log(" Connected to server with ID:", socket.id);
});

// Connection error
socket.on("connect_error", (err) => {
  console.error(" Connection error:", err.message);
});

// Disconnected from server
socket.on("disconnect", (reason) => {
  console.warn("Disconnected:", reason);
});

//  Listen for order events
socket.on("orderCreated", (order) => {
  console.log(" New Order Created:", order);
});

socket.on("orderUpdated", (order) => {
  console.log("Order Updated:", order);
});

socket.on("orderDeleted", (data) => {
  console.log("Order Deleted:", data.id);
});
