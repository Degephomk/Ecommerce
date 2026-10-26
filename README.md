# Ecommerce Backend

A backend application built with **Node.js, Express.js, and MongoDB**. The project uses Mongoose for database connectivity and organizes its application code into routes, controllers, and models.

## Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — Web application framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modeling
- **dotenv** — Environment variable configuration
- **UUID** — Unique identifier generation
- **Nodemon** — Automatic server restart during development

## Project Structure

```text
Ecommerce/
├── controllers/       # Request-handling logic
├── models/            # Data models
├── routes/            # API route definitions
├── app.js             # Application entry point
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Dependency lockfile
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

Before running the application, ensure you have installed:

- Node.js and npm
- MongoDB Community Server

### 1. Clone the repository

```bash
git clone https://github.com/Degephomk/Ecommerce.git
cd Ecommerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=8000
```

The application uses port `8000` by default if `PORT` is not configured.

### 4. Start MongoDB

Ensure your local MongoDB server is running. The application connects to:

```text
mongodb://127.0.0.1:27017/ecommerce
```

The database name is `ecommerce`.

### 5. Run the application

```bash
npm start
```

The application uses Nodemon to run `app.js`. Once started, the server listens on the configured port.

The API base path is:

```text
http://localhost:8000/api
```

## API Structure

The application imports user routes from `routes/user.js` and mounts them under `/api`.

Specific endpoints and their request formats should be documented here after reviewing the route definitions.

## Development

To restart the application automatically when source files change, use:

```bash
npm start
```

The start script uses Nodemon, which is included in the project's dependencies.

## Future Improvements

Potential improvements include:

- Moving the MongoDB connection string into environment variables.
- Adding request validation and consistent error handling.
- Implementing automated API tests.
- Documenting API endpoints and request examples.
- Adding deployment instructions and production configuration.

## License

This project currently specifies the ISC license in `package.json`. Review the intended licensing terms before distributing the project.
