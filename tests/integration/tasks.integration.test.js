const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/database');

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("API d'intégration /tasks", () => {
  test('POST /tasks crée une tâche et GET /tasks la retrouve', async () => {
    const createResponse = await request(app)
      .post('/tasks')
      .send({ title: 'Tâche intégration', description: 'Tester POST', status: 'todo' })
      .expect(201);

    expect(createResponse.body).toHaveProperty('id');
    expect(createResponse.body.title).toBe('Tâche intégration');

    const listResponse = await request(app).get('/tasks').expect(200);
    expect(Array.isArray(listResponse.body)).toBe(true);
    expect(listResponse.body.some((task) => task.id === createResponse.body.id)).toBe(true);
  });

  test('GET /tasks/:id avec un id inexistant renvoie 404', async () => {
    await request(app)
      .get('/tasks/00000000-0000-0000-0000-000000000000')
      .expect(404);
  });

  test('POST /tasks avec body vide renvoie 400', async () => {
    await request(app)
      .post('/tasks')
      .send({})
      .expect(400);
  });
});
