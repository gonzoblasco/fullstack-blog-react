# Contribuir al Proyecto

¡Gracias por tu interés en contribuir! Este proyecto sigue una estructura clara y un flujo simple para garantizar cambios organizados y fáciles de revisar.

## 1. Flujo de trabajo

1. **Crear un fork** del repositorio.
2. **Clonar tu fork**:
   ``bash
   git clone <url-de-tu-fork>
``

3. **Crear una rama por feature o fix**:

   ``bash
   git checkout -b feature/nombre-claro
   ``
4. **Realizar los cambios** siguiendo la estructura existente.
5. **Correr el proyecto** para verificar que todo funciona:

   * Backend en `backend/`
   * Frontend en `frontend/`
6. **Hacer commit siguiendo Conventional Commits**:

   ``bash
   git commit -m "feat: agregar formulario de comentarios"
   ``
7. **Push a tu fork**:

   ``bash
   git push origin feature/nombre-claro
   ``
8. **Crear un Pull Request** describiendo:

   * Qué se agregó o modificó
   * Por qué se hizo
   * Cómo probarlo

## 2. Estilo de código

### Backend

* Usar ES Modules (`import` / `export`).
* Mantener controladores, rutas y modelos separados.
* Manejo de errores centralizado.
* Validar inputs básicos antes de llegar al modelo.

### Frontend

* React con componentes claros y reutilizables.
* Custom hooks para lógica (React Query).
* Separar lógica/API en `src/api` y `src/hooks`.

## 3. Commits (Conventional Commits)

Usar prefijos como:

* `feat:` para nuevas funcionalidades
* `fix:` para bugs
* `docs:` para documentación
* `refactor:` cambios sin modificar funcionalidad
* `chore:` tareas menores
* `style:` cambios de formato/código no funcionales

Ejemplo:

``
feat(frontend): add inline post editing component
``

## 4. Testing manual

Antes de subir un PR, verificá:

* CRUD funcionando desde el frontend
* API respondiendo sin errores
* Docker levantando correctamente backend + Mongo

## 5. Reportar issues

Si encontrás un problema:

1. Describir el error o comportamiento inesperado.
2. Indicar pasos para reproducirlo.
3. Añadir logs o capturas si es relevante.

Gracias por contribuir y ayudar a mejorar este proyecto.
