// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el módulo cors

const app = express();
const port = 3001;
const { register, obtener, login, checkAdminRole, edit, deleteUser } = require("./controlers/userController");

mongoose.connect('mongodb://127.0.0.1:27017/proyecto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors()); // Usa el middleware cors


app.use(express.json());

app.post('/register', register);
app.get('/obtener', obtener);

app.post('/login', login);

app.put('/edit/:id', edit );

app.delete('/deleteUser/:id', deleteUser );

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
