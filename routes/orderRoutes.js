// routes/orderRoutes.js
const express = require("express");
const Order = require("../model/Order");

const router = express.Router();

module.exports = (io) => {
 
  router.post("/", async (req, res) => {
    try {
      const order = new Order(req.body);
      await order.save();

      io.emit("orderCreated", order); // notify clients
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  
  router.put("/:id", async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updated_at: Date.now() },
        { new: true }
      );

      io.emit("orderUpdated", order); // notify clients
      res.json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

 
  router.delete("/:id", async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      io.emit("orderDeleted", { id: req.params.id });
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  return router;
};
