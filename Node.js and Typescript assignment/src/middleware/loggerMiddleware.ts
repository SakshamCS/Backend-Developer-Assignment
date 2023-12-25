import { Request, Response, NextFunction } from 'express';

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);

  // Pass the request to the next middleware or route handler
  next();
}

export { loggerMiddleware };