'use strict';

const superTest = require('supertest');
const server = require('../src/sever.js');
const request = superTest(server.app);

describe('Validator Middleware ', () => {
  it('person route without query', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    
  });

  it('Person Route with query', async () => {
    const response = await request.get('/person?name=anwar');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('anwar');
  });
});
