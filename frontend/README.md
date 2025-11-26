# Fullstack Blog React

Aplicación **full stack** de ejemplo que implementa un blog sencillo con:

- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Frontend**: React + Vite + TanStack Query
- **Infra local**: Docker + Docker Compose (backend + Mongo)

El objetivo del proyecto es practicar y demostrar un flujo completo **CRUD**:
crear, listar, editar y eliminar posts, con una arquitectura limpia y lista para escalar.

---

## Características principales

- API REST en Express con:
  - Modelo `Post` (Mongoose)
  - Rutas CRUD (`/posts`)
  - Validación básica de inputs
  - Middleware de manejo de errores global

- Frontend en React con:
  - React Query para manejo de estado remoto
  - Listado de posts
  - Formulario para crear posts
  - Edición inline de posts
  - Eliminación de posts

- Docker Compose para:
  - Levantar MongoDB
  - Levantar el backend apuntando al servicio `mongo`

---

## Stack tecnológico

**Backend**

- Node.js 22
- Express
- Mongoose (MongoDB)
- dotenv
- cors

**Frontend**

- React (Vite)
- @tanstack/react-query
- axios

**Infra**

- Docker
- Docker Compose
- MongoDB 7

---

## Estructura del proyecto

```txt
fullstack-blog-react/
  backend/
    src/
      controllers/
      models/
      routes/
      services/
      middleware/
      server.js
    package.json
    Dockerfile
    .dockerignore
    .env (no se trackea)
  frontend/
    src/
      api/
      components/
      hooks/
      App.jsx
      main.jsx
    package.json
    .env (no se trackea)
  docker-compose.yml
  README.md
````

---

## Cómo ejecutar el proyecto

### Opción 1: con Docker (recomendada)

Requisitos:

* Docker
* Docker Compose

En la raíz del proyecto:

```bash
docker compose up --build
```

Esto va a:

* Levantar `mongo` en `mongodb://mongo:27017/fullstack_blog`
* Levantar el backend en `http://localhost:4000`

Luego, en otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend disponible en:

* `http://localhost:5173`

La app consumirá la API en `http://localhost:4000`.

---

### Opción 2: sin Docker (solo para desarrollo local rápido)

#### Backend

```bash
cd backend
npm install
cp .env.example .env  # completar si es necesario
npm run dev
```

Por defecto:

* API en `http://localhost:4000`
* MongoDB local en `mongodb://127.0.0.1:27017/fullstack_blog`

#### Frontend

```bash
cd frontend
npm install
cp .env.example .env  # completar si es necesario
npm run dev
```

Frontend en:

* `http://localhost:5173`

---

## Variables de entorno

### Backend (`backend/.env`)

```env
PORT=4000
MONGODB_URI=mongodb://mongo:27017/fullstack_blog
NODE_ENV=development
```

(En local sin Docker, `MONGODB_URI` puede ser
`mongodb://127.0.0.1:27017/fullstack_blog`)

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:4000
```

---

## Scripts útiles

### Backend

En `backend/package.json`:

* `npm run dev` — Levanta el servidor con nodemon (desarrollo)
* `npm start` — Levanta el servidor con node (producción)

### Frontend

En `frontend/package.json`:

* `npm run dev` — Modo desarrollo Vite
* `npm run build` — Build de producción
* `npm run preview` — Previsualizar build de producción

---

## Próximos pasos / mejoras posibles

* Autenticación básica para proteger creación/edición/eliminación de posts
* Paginación y filtros en `/posts`
* Tests (unitarios e integración)
* Estilos con Tailwind o algún diseño más trabajado
* Deploy del backend y frontend en servicios cloud (Railway, Render, Vercel, etc.)
