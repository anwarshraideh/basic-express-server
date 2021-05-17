'use strict';

const superTest = require('supertest');
const server = require('../src/sever.js');
const request = superTest(server.app);

describe('Server', () => {
  it('should get a welcome message', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello and welcom to my server');
  });
  test('handle invalid routes', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  
});

