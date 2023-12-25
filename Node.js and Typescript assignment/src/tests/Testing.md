First, install Jest and ts-jest:

```bash
npm install --save-dev jest ts-jest @types/jest
```

I've used the `supertest` library to simulate HTTP requests. Make sure to install it:

```bash
npm install --save-dev supertest
```

You can run the tests with:

```bash
npm test
```

These tests cover success cases for the `GET /api/products` and `POST /api/products` endpoints,
as well as an error case for invalid product data during a POST request.