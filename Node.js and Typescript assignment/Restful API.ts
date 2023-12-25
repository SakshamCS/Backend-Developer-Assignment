// This is a RESTful API using Node.js and TypeScript with
// the specified endpoints and an in-memory data store (an array) for product data.

// 1. Install required packages:

// ```bash
// npm init -y
// npm install express typescript @types/node @types/express ts-node
// ```

// 2. Create a `tsconfig.json` file:

// json

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

// 3. Create a `src` folder and add the following files:

// **`src/app.ts`** - Express application setup:

import express from 'express';
import bodyParser from 'body-parser';
import { ProductController } from './controllers/productController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Products controller
app.use('/api/products', ProductController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// **`src/controllers/productController.ts`** - Product controller:

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

// In-memory product data store
let products: Product[] = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
];

// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
}

// GET /api/products
router.get('/', (req: Request, res: Response) => {
  res.json(products);
});

// GET /api/products/:id
router.get('/:id', (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST /api/products
router.post('/', (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put('/:id', (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id, 10);
  const updatedProduct: Product = req.body;

  const index = products.findIndex((p) => p.id === productId);

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// DELETE /api/products/:id
router.delete('/:id', (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== productId);
  res.sendStatus(204);
});

export { router as ProductController };

// 4. Run the application:
// ```bash
// npx ts-node src/app.ts
//  ``` 
// */

// Your API should now be running at `http://localhost:3000`.
// You can test the endpoints using tools like `curl` or Postman.