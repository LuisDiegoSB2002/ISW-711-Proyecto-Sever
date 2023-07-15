const User = require("../models/userModel");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    
  
    try {
      // Verificar si ya existe un usuario con el mismo correo electrónico
      const existingUser = await User.findOne({ email });
      console.log(existingUser);
      if (existingUser) {
        return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
      }
  
      // Crear un nuevo usuario con el rol "user"
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role: 'user',
      });
  
      await newUser.save();
  
      res.status(200).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  }
  const obtener = async (req, res) => { 
    try {
        const existingUser = await User.find();
        if(existingUser){
            res.status(200).json({error: "entra"});
        }
        else{
            res.status(200).json({error: "NO "});
        }
    }
    catch(e){
        console.log(e.message);
    }
    
    
  }
  module.exports = {register, obtener};