const express = require('express');
const path = require('path');
const app = express();

// Sirve todos los archivos estáticos (HTML, JS, etc.) desde esta carpeta
app.use(express.static(path.join(__dirname)));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});