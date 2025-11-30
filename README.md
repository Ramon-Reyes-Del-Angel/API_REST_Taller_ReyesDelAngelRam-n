# API_REST_Taller_ReyesDelAngelRam-n
Descripción

Este proyecto es un servidor web básico desarrollado con Node.js y Express, que permite manejar usuarios mediante endpoints GET y POST. Incluye ejemplos de rutas, manejo de JSON, y persistencia temporal de datos en memoria (mock de usuarios). Es ideal como introducción al desarrollo de APIs REST en Node.js.

Tecnologías utilizadas

Node.js: Entorno de ejecución para JavaScript.

Express: Framework minimalista para crear servidores web.

Nodemon: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

Instalación y configuración

Abrir VS Code y abrir o crear una carpeta para el proyecto.

Inicializar proyecto:

npm init -y


Instalar dependencias:

npm install express nodemon


Configurar script de desarrollo en package.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
}


Crear archivo principal index.js y agregar el código del servidor (ver sección de código abajo).

Código del servidor (index.js)
// 1. Importar Express
const express = require('express');

// 2. Crear instancia del servidor
const app = express();

// 3. Middleware para parsear JSON
app.use(express.json());

// 4. Puerto del servidor
const PORT = 3000;

// 5. Rutas

// 5.1 Endpoint raíz
app.get('/', (req, res) => {
    res.send("¡Hola Mundo desde Express!. Este es mi primer servidor web.");
});

// 5.2 Endpoint de saludo
app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "Hola",
        autor: "Ramón",
        fecha: new Date()
    });
});

// 5.3 Mock de usuarios
const usuarios = [
    { id: 1, nombre: "Jorge", edad: 28 },
    { id: 2, nombre: "Martha", edad: 34 },
    { id: 3, nombre: "Paola", edad: 45 }
];

// 5.4 Endpoint POST para agregar usuarios
app.post('/user', (req, res) => {
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

Ejecución del proyecto

Abrir la terminal en VS Code.

Ejecutar el servidor en modo desarrollo:

npm run dev


Abrir un navegador o herramienta de pruebas como Thunder Client y visitar:

http://localhost:3000/ → mensaje de bienvenida.

http://localhost:3000/saludo → JSON con saludo.

Hacer peticiones POST a /user enviando JSON con:

{
    "nombre": "Nuevo Usuario",
    "edad": 30
}

Próximos pasos / mejoras

Implementar PUT y PATCH para actualizar usuarios usando query params.

Implementar DELETE para eliminar usuarios.

Conectar con una base de datos real (MongoDB, MySQL, etc.) en lugar del mock.

Añadir validaciones y manejo de errores para las peticiones.

Notas

Los navegadores solo soportan GET directamente. Para otros métodos HTTP, usar herramientas como:

Thunder Client (VS Code)

- Postman

- Insomnia

- Yaak

- ApiDog

Repositorio


