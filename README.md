
# 🛒 Real-Time Orders API with Socket.IO

This project is a simple **Node.js + Express + MongoDB + Socket.IO** app for managing orders in real-time.  
Whenever an order is created, updated, or deleted, **all connected clients** automatically receive the updated orders list.

---

## 🚀 Features
- ✅ **Create, Update, Delete Orders** (REST API)
- ✅ **Real-time updates** via Socket.IO
- ✅ **Automatic sync** – all clients always see the latest orders list
- ✅ **Auto-reconnect** support on the client
- ✅ Easy to test with Postman

---

## 📂 Project Structure

```
project-folder/
│
├── config/
│   └── db.js               # Database connection (MongoDB)
│
├── model/
│   └── Order.js            # Mongoose schema/model
│
├── routes/
│   └── orderRoutes.js      # Order CRUD routes + socket.io emits
│
├── server.js               # Express + Socket.IO server
├── client.js               # Socket.IO client for testing
└── README.md               # This file
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone & Install
```bash
git clone https://github.com/your-username/realtime-orders.git
cd realtime-orders
npm install
```

### 2️⃣ Start MongoDB
Make sure MongoDB is running locally (default port `27017`).

### 3️⃣ Start the Server
```bash
node server.js
```
You should see:
```
✅ MongoDB connected successfully
🚀 Server running at http://localhost:3000
```

### 4️⃣ Run the Client (Optional)
```bash
node client.js
```
This will connect to the server and listen for events.

---

## 📬 API Endpoints (Test with Postman)

| Method | Endpoint          | Description               |
|-------|------------------|-------------------------|
| GET   | `/orders`        | Get all orders          |
| POST  | `/orders`        | Create a new order      |
| PUT   | `/orders/:id`    | Update an order by ID   |
| DELETE| `/orders/:id`    | Delete an order by ID   |

### Example Request (POST `/orders`)

```json
{
  "customer_name": "John Doe",
  "product_name": "iPhone 15 Pro",
  "status": "pending"
}
```

---

## 📡 Socket.IO Events

| Event         | Direction | Payload Example |
|--------------|-----------|----------------|
| `allOrders`  | Server → Client | `[ { "_id": "...", "customer_name": "John", "product_name": "iPhone", "status": "pending" } ]` |
| `orderCreated` | Server → Client | `{ "_id": "...", "customer_name": "John" }` |
| `orderUpdated` | Server → Client | `{ "_id": "...", "status": "shipped" }` |
| `orderDeleted` | Server → Client | `{ "id": "orderId" }` |

---

## 🔄 Real-Time Flow

1. Client connects → receives **full orders list** via `allOrders`
2. Client creates/updates/deletes an order via REST API
3. Server emits `allOrders` to **all connected clients**
4. Everyone’s UI updates instantly 🎯

---

## 🧪 Testing

- Use **Postman** to create/update/delete orders.
- Keep `client.js` running to see live events in the console.
- Open multiple clients (run `node client.js` in multiple terminals) to see real-time sync.

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Realtime:** Socket.IO
- **Client:** socket.io-client (Node.js)

---

## 📜 License
MIT License – free to use & modify.
