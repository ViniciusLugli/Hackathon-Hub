// server.js
import express from "express";

const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

// Rota POST funcionando
app.post("/api", (req, res) => {
  res.json({
    message: "Send your data!",
    data: req.body,
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
