API REST RPG

Descripción:
Esta API permite gestionar personajes de un juego de rol (RPG) y simular batallas entre ellos utilizando sus estadísticas.

Tecnologías utilizadas:

* Node.js
* Express.js

Cómo ejecutar el proyecto:

1. Abrir la carpeta del proyecto en la terminal
2. Ejecutar el comando: node index.js
3. El servidor iniciará en: http://localhost:3000

Funcionalidades:

* Crear personajes
* Listar personajes
* Consultar personaje por ID
* Actualizar personaje
* Eliminar personaje
* Simular batalla entre dos personajes

Endpoints:

1. Crear personaje
   POST http://localhost:3000/personajes

Body (JSON):
{
"nombre": "Rauliño",
"colorPiel": "Moreno",
"raza": "Humano",
"fuerza": 8,
"agilidad": 6,
"magia": 4,
"conocimiento": 7
}

2. Listar personajes
   GET http://localhost:3000/personajes

3. Obtener personaje por ID
   GET http://localhost:3000/personajes/:id

4. Actualizar personaje
   PUT http://localhost:3000/personajes/:id

5. Eliminar personaje
   DELETE http://localhost:3000/personajes/:id

6. Simular batalla
   POST http://localhost:3000/batalla

Body (JSON):
{
"id1": 1,
"id2": 2
}

Notas:

* Los datos se almacenan en memoria, por lo que se eliminan al reiniciar el servidor.
* Se recomienda usar Postman para probar los endpoints.
