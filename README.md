# Exercise_ContactsMongo

Este proyecto utiliza **Mongoose** para conectar y trabajar con una base de datos MongoDB llamada `contacts`. Implementa varias operaciones CRUD (Crear, Leer, Actualizar, Eliminar) dependiendo de un parámetro adicional pasado al ejecutar la aplicación.

## Requisitos previos

- Node.js instalado en tu sistema.
- MongoDB en ejecución en el puerto predeterminado (`27017`).

## Configuración del proyecto

1. Crea un directorio para el proyecto:
   ```bash
   mkdir Exercise_ContactsMongo
   cd Exercise_ContactsMongo
   ```

2. Inicializa el proyecto:
   ```bash
   npm init -y
   ```

3. Instala la dependencia **mongoose**:
   ```bash
   npm install mongoose
   ```

4. Crea un archivo fuente llamado `contacts.js` y añade el código correspondiente.

## Código del archivo `contacts.js`

El archivo incluye:

1. Conexión a la base de datos MongoDB llamada `contacts`.
2. Definición del esquema y modelo `Contact`.
3. Implementación de acciones CRUD según el parámetro proporcionado.

## Uso de la aplicación

Dependiendo del parámetro pasado al ejecutar la aplicación, se realizan las siguientes acciones:

### 1. Insertar contactos

Ejecuta:
```bash
node contacts.js i
```

Esto añadirá 3 contactos válidos predefinidos en el código a la colección `contacts`.

### 2. Listar contactos

Ejecuta:
```bash
node contacts.js l
```

Este comando:
- Lista todos los contactos en la colección.
- Muestra un contacto específico, filtrando por su nombre y teléfono (predefinido en el código).

### 3. Actualizar un contacto

Ejecuta:
```bash
node contacts.js u
```

Este comando actualizará el nombre de un contacto dado su `_id` (predefinido en el código).

### 4. Eliminar un contacto

Ejecuta:
```bash
node contacts.js d
```

Este comando eliminará un contacto dado su `_id` (predefinido en el código).

## Consideraciones

- Asegúrate de que MongoDB esté corriendo antes de ejecutar cualquier comando.
- Los `_id` utilizados para actualizar o eliminar deben ser válidos en la base de datos.
- Para probar cada funcionalidad, modifica el código para usar diferentes `_id` de contactos ya existentes en la base de datos.

## Comprobaciones adicionales

Para verificar los datos almacenados directamente en MongoDB, puedes usar el shell interactivo:
```bash
mongo
use contacts
db.contacts.find().pretty()
```

