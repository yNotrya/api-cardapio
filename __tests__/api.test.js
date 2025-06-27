const request = require('supertest');
const express = require('express');
const fs = require('fs');

const app = express();
app.get('/cardapio_digital', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./cardapio.json'));
  res.json(data);
});

describe('GET /cardapio_digital', () => {
  it('deve retornar status 200', async () => {
    const res = await request(app).get('/cardapio_digital');
    expect(res.statusCode).toBe(200);
  });

  it('deve retornar pelo menos 10 itens', async () => {
    const res = await request(app).get('/cardapio_digital');
    expect(res.body.length).toBeGreaterThanOrEqual(10);
  });
});
