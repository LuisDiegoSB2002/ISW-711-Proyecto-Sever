// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el módulo cors
const app = express();

const port = 3001;
const { register, obtener, login, checkAdminRole, edit, deleteUser,createNewUser, obtenerXId } = require("./controlers/userController");
const {Session} = require ("./controlers/sessionController");
const {createNewPrompts,editPrompts,deletePrompts} = require("./controlers/promptsController");

mongoose.connect('mongodb://127.0.0.1:27017/proyecto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors()); // Usa el middleware cors


app.use(express.json());

app.post('/register', register);

app.post('/createNewUser',Session, createNewUser);

app.get('/obtener', obtener);

app.post('/login', login);

app.put('/editUser/:id', edit );

app.delete('/deleteUser/:id', deleteUser );

app.get('/deleteUser/:id', deleteUser );

app.get('/obtenerXId/:id', obtenerXId);



//Request de los Prompts

app.post('/createNewPrompts', createNewPrompts);
app.post('/editPrompts/:id', editPrompts);
app.post('/deletePrompts/:id', deletePrompts);




app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
