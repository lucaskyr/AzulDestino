const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.send('conectou ao servidor');
  } catch (error) {
    res.send('falha ao conectar ao servidor');
  }
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
