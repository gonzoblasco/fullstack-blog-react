# Fullstack Blog React

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D22-green.svg)
![Docker](https://img.shields.io/badge/docker-compose-blue.svg)

Una aplicación **full stack** moderna que implementa un blog completo. Diseñada para demostrar una arquitectura limpia, escalable y lista para producción utilizando el stack MERN (MongoDB, Express, React, Node).

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación y Ejecución](#-instalación-y-ejecución)
  - [Con Docker (Recomendado)](#con-docker-recomendado)
  - [Manual (Desarrollo)](#manual-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Variables de Entorno](#-variables-de-entorno)
- [API Endpoints](#-api-endpoints)
- [Contribución](#-contribución)

---

## ✨ Características

*   **CRUD Completo**: Crear, leer, actualizar y eliminar posts.
*   **Arquitectura Limpia**: Separación de responsabilidades en backend y frontend.
*   **Gestión de Estado Remoto**: Uso de TanStack Query para sincronización eficiente de datos.
*   **Containerización**: Configuración completa con Docker y Docker Compose para un despliegue sencillo.
*   **Validaciones**: Validación de datos en backend y manejo de errores robusto.
*   **Edición Inline**: Experiencia de usuario fluida para editar contenido directamente.

---

## 🛠 Stack Tecnológico

### Backend
*   **Runtime**: Node.js 22
*   **Framework**: Express.js
*   **Base de Datos**: MongoDB (con Mongoose ODM)
*   **Utilidades**: `dotenv`, `cors`

### Frontend
*   **Framework**: React (Vite)
*   **Estado/Data Fetching**: @tanstack/react-query
*   **Cliente HTTP**: Axios
*   **Estilos**: CSS Modules / Vanilla CSS

### Infraestructura
*   **Docker**: Contenedores para la aplicación y base de datos.
*   **Docker Compose**: Orquestación de servicios.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

*   [Docker Desktop](https://www.docker.com/products/docker-desktop) (para la opción recomendada)
*   [Node.js](https://nodejs.org/) (v22 o superior, si ejecutas manualmente)
*   [Git](https://git-scm.com/)

---

## 🚀 Instalación y Ejecución

### Con Docker (Recomendado)

Esta es la forma más rápida de levantar todo el entorno (Base de datos + Backend).

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repo>
    cd fullstack-blog-react
    ```

2.  **Levantar los servicios:**
    ```bash
    docker compose up --build
    ```
    *   MongoDB estará en: `mongodb://localhost:27017/fullstack_blog`
    *   Backend API estará en: `http://localhost:4000`

3.  **Iniciar el Frontend:**
    Abre una nueva terminal:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    *   Accede a la aplicación en: `http://localhost:5173`

### Manual (Desarrollo)

Si prefieres ejecutar todo localmente sin Docker:

#### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# Asegúrate de tener una instancia de MongoDB corriendo localmente
npm run dev
```

#### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

---

## 📂 Estructura del Proyecto

```txt
fullstack-blog-react/
├── backend/                # Servidor Node.js/Express
│   ├── src/
│   │   ├── controllers/    # Lógica de controladores
│   │   ├── models/         # Modelos Mongoose
│   │   ├── routes/         # Definición de rutas API
│   │   ├── services/       # Lógica de negocio
│   │   ├── middleware/     # Middlewares (errores, logs)
│   │   └── server.js       # Punto de entrada
│   ├── Dockerfile
│   └── .env.example
├── frontend/               # Cliente React/Vite
│   ├── src/
│   │   ├── api/            # Llamadas a la API (Axios)
│   │   ├── components/     # Componentes React reutilizables
│   │   ├── hooks/          # Custom Hooks (React Query)
│   │   ├── App.jsx         # Componente principal
│   │   └── main.jsx        # Punto de entrada
│   └── .env.example
├── docker-compose.yml      # Orquestación de servicios
└── README.md               # Documentación del proyecto
```

---

## 🔑 Variables de Entorno

### Backend (`backend/.env`)

| Variable | Descripción | Valor por defecto (Docker) |
| :--- | :--- | :--- |
| `PORT` | Puerto del servidor | `4000` |
| `MONGODB_URI` | String de conexión a Mongo | `mongodb://mongo:27017/fullstack_blog` |
| `NODE_ENV` | Entorno de ejecución | `development` |

### Frontend (`frontend/.env`)

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `VITE_API_URL` | URL base de la API | `http://localhost:4000` |

---

## 📡 API Endpoints

La API base se encuentra en `/posts`.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/posts` | Obtener todos los posts |
| `POST` | `/posts` | Crear un nuevo post |
| `PUT` | `/posts/:id` | Actualizar un post existente |
| `DELETE` | `/posts/:id` | Eliminar un post |

---

## 🤝 Contribución

1.  Haz un Fork del proyecto.
2.  Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`).
3.  Haz Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

## 📝 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.
