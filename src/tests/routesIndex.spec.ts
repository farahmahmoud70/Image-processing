import request from 'supertest';
import express from 'express';

import routes from '../routes/index';

describe('Routes Index Desciptions', () => {
  it('expect route / has the response main routes', async () => {
    const app = express();
    app.use('/', routes);
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('main routes');
  });
  it("expect an error if route / doesn'nt exist'", async () => {
    const app = express();
    const res = await request(app).get('');
    expect(res.statusCode).toBe(404);
  });
});
