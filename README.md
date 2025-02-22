# Opinion Manager

Este sistema tiene como objetivo crear un sistema de gestión de opiniones similar a las publicaciones de
Facebook, con funcionalidades específicas centradas en la interacción y expresión de opiniones por parte de
los usuarios.

## Endpoints disponibles

### Autenticación

1. **Registrar usuario**

   **POST** `/opinionManager/v1/auth/register`

   **Body (form-data):**

   - `name`: Nombre del usuario
   - `surname`: Apellido del usuario
   - `username`: Nombre de usuario
   - `phone`: Numero de celular
   - `email`: Correo electrónico
   - `password`: Contraseña
   - `birthdate`: 2006-12-27
   - `gender`: Genero
   - `profilePicture`: Imagen de perfil (archivo)

2. **Iniciar sesión**

   **POST** `/opinionManager/v1/auth/login`

   **Body (JSON):**

   ```json
   {
     "username": "Nombre de Usuario",
     "password": "Contraseña"
   }
   ```

### Usuario

1. **Actualizar contraseña o usuario**

   **PUT** `/opinionManager/v1/user/updateCredentials`

   **Body (JSON):**

   ```json
   {
     "username": "",
     "passwordOld": "Contraseña Antigua",
     "passwordNew": "Contraseña Nueva"
   }
   ```


### Categorías (token de administrador)

1. **Agregar categoría**

   **POST** `/opinionManager/v1/category/addCategory`

   **Body (JSON):**

   ```json
   {
     "name": "nombre de la categoria",
     "description": "description categoria"
   }
   ```

2. **Listar categorías**

   **GET** `/opinionManager/v1/category/`

3. **Actualizar categoría**

   **PUT** `/opinionManager/v1/category/updateCategory/:uid`

   **Body (JSON):**

   ```json
   {
     "name": "Nombre ah ser actualizado"
   }
   ```

4. **Eliminar categoría**

   **DELETE** `/opinionManager/v1/category/deleteCategory/:uid`

### Publicaciones (token verificando que no es Admin)

1. **Agregar publicación**

   **POST** `/opinionManager/v1/publication/addPublication`

   **Body (JSON):**

   ```json
   {
     "publicationtitle": "Título de la publicación",
     "content": "Contenido de la publición",
     "category": "Categoria de la publicación (:uid)"
   }
   ```

2. **Listar publicaciones**

   **GET** `/opinionManager/v1/publication/`

3. **Actualizar publicación**

   **PUT** `/opinionManager/v1/publication/updatePublication/:uid`

   **Body (JSON):**

   ```json
   {
     "publicationtitle": "Nuevo título de la publicacion",
     "content": "Nuevo contenido de la publicacion"
   }
   ```

4. **Eliminar publicación**

   **DELETE** `/opinionManager/v1/publication/deletePublication/:uid`

### Comentarios

1. **Agregar comentario a una publicación**

   **POST** `/opinionManager/v1/comment/addComment`

   **Body (JSON):**

   ```json
   {
     "comment": "Comentario para la publicación",
     "publicationcomment": "UID de la publicación"
   }
   ```

2. **Listar comentarios de una publicación**

   **GET** `/opinionManager/v1/comment/`

3. **Actualizar comentario**

   **PATCH** `/opinionManager/v1/comment/updateComment/:uid`

   **Body (JSON):**

   ```json
   {
     "comment": "Comentario a Actulizar"
   }
   ```

4. **Eliminar comentario**

   **DELETE** `/opinionManager/v1/comment/deletePublication/:uid`
