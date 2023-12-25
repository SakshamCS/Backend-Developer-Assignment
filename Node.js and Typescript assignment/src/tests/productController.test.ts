import request from 'supertest';
import express, { Application } from 'express';
import { ProductController } from '../controllers/productController';

const app: Application = express();
app.use(express.json());
app.use('/api/products', ProductController);

describe('GET /api/products', () => {
  it('should return a list of products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Assuming you have two products in the in-memory store
  });
});

describe('POST /api/products', () => {
  it('should create a new product', async () => {
    const newProduct = { name: 'New Product', price: 39.99 };
    const response = await request(app).post('/api/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newProduct);
  });

  it('should handle invalid product data', async () => {
    const invalidProduct = { invalidField: 'Invalid Value' };
    const response = await request(app).post('/api/products').send(invalidProduct);
    expect(response.status).toBe(400); // Assuming you return a 400 Bad Request for invalid data
  });
});