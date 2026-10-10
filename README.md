# Laboratorio 08 - Express, MongoDB Atlas y Render

## Local
1. Copia tu cadena de conexión de MongoDB Atlas en `.env` (no publiques ese archivo).
2. Ejecuta `npm install` y `npm run dev`.
3. En Postman, POST `http://localhost:3000/api/users` con JSON `{"name":"Prueba","email":"prueba@example.com"}`.
4. GET `http://localhost:3000/api/users`.

## GitHub y Render
- Publica este proyecto en GitHub. No subas `.env` ni `node_modules`.
- Crea un Web Service en Render conectado a ese repositorio (Node, build: `npm install`, start: `npm start`).
- Define `MONGO_URI` en Render. El puerto puede asignarlo Render automáticamente.
- En Render copia Deploy Hook desde Settings.
- En GitHub > Settings > Secrets and variables > Actions crea `RENDER_DEPLOY_HOOK_URL` con el hook completo.
- Cada push a `main` ejecutará el workflow.

## Advertencia
El laboratorio también exige desplegar el proyecto JWT del laboratorio 07; este código es exclusivamente el CRUD previo y CI/CD de la parte 1, no implementa JWT.
