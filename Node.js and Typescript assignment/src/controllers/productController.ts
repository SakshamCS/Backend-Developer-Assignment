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