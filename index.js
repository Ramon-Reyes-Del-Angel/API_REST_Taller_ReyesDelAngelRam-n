// 1. Importar Express
const express = require('express');

// 2. Crear instancia de la aplicación (nuestro servidor)
const app = express();

// 3. Middleware
app.use(express.json()); // 3.1 Middleware para parsear JSON en las peticiones

// 4. Configuración del puerto
const PORT = 3000; // 4.1 Puerto donde escuchará el servidor

// 5. Rutas

// 5.1 Endpoint raíz
app.get('/', (req, res) => { // req: request, res: response
    res.send("¡Hola Mundo desde Express!. Este es mi primer servidor web.");
});

// 5.2 Endpoint saludo
app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "Hola",
        autor: "Ramón",
        fecha: new Date()
    });
});

// 5.3 Mock de datos de usuarios
const usuarios = [
    { id: 1, nombre: "Jorge", edad: 28 },
    { id: 2, nombre: "Martha", edad: 34 },
    { id: 3, nombre: "Paola", edad: 45 }
];

// 5.4 Endpoint POST para agregar usuarios
app.post('/user', (req, res) => {
    /**
     * Estructura esperada del cuerpo de la petición:
     * nombre: String
     * edad: Number
     */
    const cuerpo = req.body;

    const usuario = {
        id: usuarios.length + 1,
        nombre: cuerpo.nombre,
        edad: cuerpo.edad
    };

    usuarios.push(usuario);
    
    res.json({
        mensaje: "¡Usuario agregado exitosamente!",
        nuevo_usuario: usuario,
        usuarios_actualizdos: usuarios
    });
});

// 6. Iniciar servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo exitosamente en http://localhost:' + PORT);    
});
