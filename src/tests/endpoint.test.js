const app = require('../../server');
const request = require("supertest");

describe("Tests of routes", () => {
  test('CEP valido',  () => {
    const res =  request(app).get('http://localhost:7000/cep')
    expect(res.statusCode).toEqual(200);

  });

  test('media valida',  () => {
    const res =  request(app).post('http://localhost:7000/media')
    expect(res.statusCode).toEqual(200);

  });
});