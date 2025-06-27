const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  res.json({ 
    message: 'API Cardapio Digital em execução',
    status: 200 + ' ok' 
  });
});

app.get('/cardapio_digital', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./cardapio.json'));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
