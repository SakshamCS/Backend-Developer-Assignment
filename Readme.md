# API Documentation

Welcome to the API documentation for the Product Management API.
This API allows you to manage a list of products with basic CRUD operations.

## Running the Server Locally

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Server:**

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## Available Endpoints

### 1. Retrieve a List of Products

- **Endpoint:** `GET /api/products`
- **Description:** Retrieve a list of all products.
- **Example Request:**

  ```bash
  curl http://localhost:3000/api/products
  ```

- **Example Response:**

  ```json
  [
    { "id": 1, "name": "Product 1", "price": 19.99 },
    { "id": 2, "name": "Product 2", "price": 29.99 }
  ]
  ```

### 2. Retrieve Details of a Specific Product by ID

- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieve details of a specific product by its ID.
- **Example Request:**

  ```bash
  curl http://localhost:3000/api/products/1
  ```

- **Example Response:**

  ```json
  { "id": 1, "name": "Product 1", "price": 19.99 }
  ```

### 3. Create a New Product

- **Endpoint:** `POST /api/products`
- **Description:** Create a new product.
- **Example Request:**

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "New Product", "price": 39.99}' http://localhost:3000/api/products
  ```

- **Example Response:**

  ```json
  { "id": 3, "name": "New Product", "price": 39.99 }
  ```

### 4. Update Details of a Specific Product by ID

- **Endpoint:** `PUT /api/products/:id`
- **Description:** Update details of a specific product by its ID.
- **Example Request:**

  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Product", "price": 49.99}' http://localhost:3000/api/products/3
  ```

- **Example Response:**

  ```json
  { "id": 3, "name": "Updated Product", "price": 49.99 }
  ```

### 5. Delete a Product by ID

- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Delete a product by its ID.
- **Example Request:**

  ```bash
  curl -X DELETE http://localhost:3000/api/products/3
  ```

- **Example Response:**

  ```json
  {} (No content)
  ```

## Error Handling

- If a requested resource is not found, the API returns a `404 Not Found` response.
- If there's a validation error during the creation or update of a product, the API returns a `400 Bad Request` response with details about the error.