import request from 'supertest';
import express from 'express';
import routes from '../routes/index';

describe('Images Routes Desciptions', () => {
  const app = express();
  app.use('/images', routes);
  it('expect route /images has the correct response', async () => {
    const res = await request(app).get(
      '/images?filename=fjord&filetype=jpg&width=300&height=300'
    );
    expect(res.statusCode).toBe(200);
  });
});
