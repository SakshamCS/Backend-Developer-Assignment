This is a RESTful API using Node.js and TypeScript with
the specified endpoints and an in-memory data store (an array) for product data.

 1. Install required packages:

```bash
npm init -y
npm install express typescript @types/node @types/express ts-node
```


2. Run the application:
```bash
npx ts-node src/app.ts
```

Your API should now be running at `http://localhost:3000`.
You can test the endpoints using tools like `curl` or Postman.

Middleware - every incoming request to your API will be logged with a timestamp, HTTP method, and requested URL.