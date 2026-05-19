const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
let personajes = [];
app.post('/personajes', (req, res) => {
  const nuevo = {
    id: Date.now(),
    ...req.body
  };
  personajes.push(nuevo);
  res.json(nuevo);
});
app.get('/personajes', (req, res) => {
  res.json(personajes);
});
app.get('/personajes/:id', (req, res) => {
  const p = personajes.find(x => x.id == req.params.id);
  res.json(p);
});
app.put('/personajes/:id', (req, res) => {
  const index = personajes.findIndex(x => x.id == req.params.id);
  personajes[index] = { ...personajes[index], ...req.body };
  res.json(personajes[index]);
});
app.delete('/personajes/:id', (req, res) => {
  personajes = personajes.filter(x => x.id != req.params.id);
  res.json({ mensaje: "Eliminado" });
});
function calcular(p) {
  return (
    p.fuerza * 2 +
    p.agilidad * 1.5 +
    p.magia * 2 +
    p.conocimiento
  );
}

app.post('/batalla', (req, res) => {
  const { id1, id2 } = req.body;

  const p1 = personajes.find(p => p.id == id1);
  const p2 = personajes.find(p => p.id == id2);

  const s1 = calcular(p1);
  const s2 = calcular(p2);

  let ganador = s1 > s2 ? p1.nombre : p2.nombre;

  res.json({
    ganador,
    puntaje1: s1,
    puntaje2: s2,
    detalle: "Batalla basada en estadísticas"
  });
});