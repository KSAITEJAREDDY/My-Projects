# Database Testing with SQLite in Node.js

This project demonstrates how to read/write from a database during automated tests using SQLite.

## Features
- Sets up an in-memory SQLite database
- Creates and inserts a user
- Validates the inserted user as part of a test

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the test:
   ```bash
   npm test
   ```

## Use Case Examples
- Preload test state before web test
- Query for expected results from DB
- Validate data post-API call

> SQLite is used here for simplicity. Swap with MySQL/PostgreSQL for production-like testing.
