# expense-tracker
Expense Tracker is an educational project designed to help students learn the fundamentals of full-stack development. The project focuses on building a simple expense management application where users can add, edit, delete, and view expenses.

## Features

- Add, update, delete, and update expenses
- Filtering by date and pagination
- Centralized validation and error handling
- Logging of key actions and errors
- Environment-aware logger (console in dev, file in production)
- Clean architecture (controller, service, repository layers)

## Project structure

```bash
src/
├── app.ts                      # Express app setup and server start
├── index.ts                    # Entry point, calls start()
├── expenses/
│   ├── expenses.controller.ts  # Express router and request handling
│   ├── expenses.service.ts     # Business logic
│   ├── expenses.repository.ts  # DB layer using Prisma
│   ├── dto/                    # Data Transfer Objects
│   └── expenses.entity.ts      # Expense model
├── helpers/
│   ├── logger.ts               # Winston logger (console in dev, file in prod)
│   ├── exeptions.ts            # Custom exception functions
│   └── middlewares/
│       ├── validator.ts        # DTO validation middleware
│       ├── errorHandler.ts     # Centralized error handling
│       └── notFoundHandler.ts  # Fallback 404 middleware
```

## Installation

### Clone and install dependencies
```bash
git clone git@github.com:goremykina/expense-tracker.git
cd expense-tracker
npm install
cd server
npm install
```

### Setup .env file
Copy the `.env.example` file to `.env` and set values in the file.

### Generate prisma client and run migrations
```bash
npx prisma generate
```

If the command above fails with an error related to SSL certificate, set the `NODE_TLS_REJECT_UNAUTHORIZED` environment variable to 0.

Then run migrations:
```bash
npx prisma migrate deploy
```

# Running the App

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Tests

```bash
npm run test
```
