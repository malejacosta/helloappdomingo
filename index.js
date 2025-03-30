const express = require('express');
const path = require('path');
const app = express();

// Sirve todos los archivos estáticos en la carpeta actual (HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});