// 1. Importar express
const express = require('express');
 
// 2. Creamos instancia de la aplicacion (nuestro servidor)
const app = express();
app.use(express.json()); // Middleware para parsear JSON
 
const PORT = 3000; // Puerto donde escuchara el servidor
 
// Definimos una ruta para el endpoint raiz
app.get('/', (req, res) => { // req: request, res: response
    res.send("¡Hola Mundo desde Express!. Este es mi primer servidor web.")
});
 
app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "Hola",
        autor: "Ramón",
        fecha: new Date()
    });
});
 
// Mock de datos
const usuarios = [
    { id: 1, nombre: "Jorge", edad: 28 },
    { id: 2, nombre: "Martha", edad: 34 },
    { id: 3, nombre: "Paola", edad: 45 }
];
 
app.post('/user', (req, res) => {
    /**
     * Estrucura esperada del cuerpo de la peticion
     * nombre: String
     * edad: Number
     */
    const cuerpo = req.body;
 
    const usuario = {
        id: usuarios.length + 1,
        nombre: cuerpo.nombre,
        edad: cuerpo.edad
    }
 
    usuarios.push(usuario);
    
    res.json({
        mensaje: "¡Usuario agregado exitosamente!",
        nuevo_usuario: usuario,
        usuarios_actualizdos: usuarios
    });
});
 
// 3. Iniciamos el servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo exitosamente en http://localhost:' + PORT);    
});