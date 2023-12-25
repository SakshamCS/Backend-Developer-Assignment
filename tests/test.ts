// Let's use Jest for writing unit tests. First, install Jest and ts-jest:

// ```bash
// npm install --save-dev jest ts-jest @types/jest
// ```

// Next, add a script to your `package.json` for running tests:

// ```json
// "scripts": {
//   "test": "jest"
// }
// ```

// Now, create a `__tests__` folder in your project's root directory and add test files 
// for the endpoints. Here are examples for testing the `GET /api/products` 
// and `POST /api/products` endpoints:

// **`__tests__/productController.test.ts`**

import request from 'supertest';
import express, { Application } from 'express';
import { ProductController } from '../src/controllers/productController';

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


// In this example, I've used the `supertest` library to simulate HTTP requests. Make sure to install it:

// ```bash
// npm install --save-dev supertest
// ```

// You can run the tests with:

// ```bash
// npm test
// ```

// These tests cover success cases for the `GET /api/products` and `POST /api/products` endpoints,
// as well as an error case for invalid product data during a POST request.