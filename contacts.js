const mongoose = require('mongoose');

// Configurar conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contacts', {
  family: 4, // Fuerza el uso de IPv4
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => console.log('Conexión exitosa a MongoDB'));

// Definir el esquema y modelo Contact
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  telephone: { type: String, required: true, match: /^\d{9}$/ },
  age: { type: Number, required: true, min: 18, max: 120 },
});

const Contact = mongoose.model('Contact', contactSchema);

// Obtener el parámetro de acción
const action = process.argv[2];

switch (action) {
  case 'i': // Insertar 4 contactos
    const contactos = [
      { name: 'Álvaro', telephone: '699639825', age: 30 },
      { name: 'Juan Pérez', telephone: '987654321', age: 32 },
      { name: 'María López', telephone: '654987321', age: 25 },
      { name: 'Ana García', telephone: '123456789', age: 35 },
    ];

    Contact.insertMany(contactos)
      .then(result => {
        console.log('Contactos añadidos:', result);
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error al añadir contactos:', error);
        mongoose.disconnect();
      });
    break;

  case 'l': // Listar todos los contactos y filtrar por nombre y teléfono
    Contact.find()
      .then(result => {
        console.log('Todos los contactos:', result);
        // Filtrar por nombre y teléfono
        return Contact.findOne({ name: 'Juan Pérez', telephone: '987654321' });
      })
      .then(contacto => {
        console.log('Contacto filtrado:', contacto);
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error al listar contactos:', error);
        mongoose.disconnect();
      });
    break;

  case 'u': // Actualizar un contacto por su ID
    const contactIdToUpdate = '677ef70c68fbdf59bdd09aa5'; // Reemplaza con un ID válido
    Contact.findByIdAndUpdate(
      contactIdToUpdate,
      { $set: { name: 'María Sanchez' } },
      { new: true }
    )
      .then(result => {
        console.log('Contacto actualizado:', result);
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error al actualizar contacto:', error);
        mongoose.disconnect();
      });
    break;

  case 'd': // Eliminar un contacto por su ID
    const contactIdToDelete = '677ef70c68fbdf59bdd09aa6'; // Reemplaza con un ID válido
    Contact.findByIdAndDelete(contactIdToDelete)
      .then(result => {
        console.log('Contacto eliminado:', result);
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error al eliminar contacto:', error);
        mongoose.disconnect();
      });
    break;

  default:
    console.log('Acción no reconocida. Usa: i, l, u o d.');
    mongoose.disconnect();
}
