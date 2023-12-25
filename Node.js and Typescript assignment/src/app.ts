import express from 'express';
import bodyParser from 'body-parser';
import { ProductController } from './controllers/productController';
import { loggerMiddleware } from './middleware/loggerMiddleware';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Logger middleware
app.use(loggerMiddleware);

// Products controller
app.use('/api/products', ProductController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});