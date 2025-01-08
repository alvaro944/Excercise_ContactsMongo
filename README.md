Crea un proyecto llamado “Exercise_ContactsMongo” en tu espacio de trabajo. Usa los
comandos npm init y npm install para instalar mongoose en el proyecto y crea un archivo
fuente llamado “contacts.js”. Añade el código explicado anteriormente para conectarse a
una base de datos llamada “contacts” y define el esquema que se muestra arriba para el
modelo Contact. Después, deberás implementar varias acciones dependiendo de un
parámetro adicional que utilizarás al iniciar la aplicación:
● Si llamas a la aplicación así: node contacts.js i, deberás añadir 3 contactos válidos
a la colección “contacts”. Estos contactos estarán predefinidos en código, no se
solicitan al usuario.
● Si utilizas node contacts.js l se mostrarán dos listas:
➢ Listado de todos los contactos de la colección.
➢ Muestra un contacto filtrando por su nombre y teléfono.
● Si utilizas node contacts.js u, deberás actualizar el nombre de un contacto, dado su
id (o cualquier otro atributo, si lo deseas).
● Finalmente, si usas node contacts.js d, debes eliminar un contacto por su id.
