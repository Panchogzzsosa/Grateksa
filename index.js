const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para mantener la aplicación activa
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Endpoint de health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    services: [
      { title: 'Capacitación de Brigadas', icon: '👥', desc: 'Entrenamiento práctico para equipos de emergencia.', img: '/images/servicios/servicio3.jpg' },
      { title: 'Protección civil en tu escuela', icon: '🚨', desc: 'Fomentar la cultura de la autoprotección en los estudiantes.', img: '/images/servicios/servicio1.jpg' },
      { title: 'Seguridad en eventos', icon: '📊', desc: 'Identificación y evaluación profesional de riesgos en eventos.', img: '/images/servicios/servicio2.jpg' },
      { title: 'Planes de Contingencia y Programas Internos de Protección Civil', icon: '📝', desc: 'Implementación de protocolos y simulacros.', img: '/images/servicios/servicio4.jpg' },
      { title: 'Bomberos y Fuerza Civil', icon: '🚒', desc: 'Atención profesional para empresas privadas.', img: '/images/servicios/servicio5.jpg' },
      { title: 'Ambulancias para Eventos', icon: '🚑', desc: 'Cobertura médica profesional para tu evento.', img: '/images/servicios/servicio6.jpg' }
    ]
  });
});

app.get('/brigadas', (req, res) => {
  res.render('brigadas');
});

app.get('/proteccion-civil', (req, res) => {
  res.render('proteccion-civil');
});

app.get('/seguridad-eventos', (req, res) => {
  res.render('seguridad-eventos');
});

app.get('/bomberos-fuerza-civil', (req, res) => {
  res.render('bomberos-fuerza-civil');
});

app.get('/ambulancias-eventos', (req, res) => {
  res.render('ambulancias-eventos');
});

app.get('/programas-internos', (req, res) => {
  res.render('programas-internos');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
  // Función para mantener la aplicación activa
  const keepAlive = () => {
    fetch(`http://localhost:${port}/health`)
      .catch(err => console.log('Error en keep-alive:', err));
  };
  
  // Ejecutar keep-alive cada 5 minutos
  setInterval(keepAlive, 5 * 60 * 1000);
}); 