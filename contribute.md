# Contributing Guide

Thank you for your interest in contributing to this project. This guide explains how to set up the project, run it locally, and start contributing without confusion.

---

## Prerequisites

Please ensure the following are installed on your system:

- Node.js (v18 or later)  
  https://nodejs.org/en/download

- Git  
  https://git-scm.com/downloads

- PostgreSQL (local installation recommended for Windows)  
  https://www.postgresql.org/download/

Optional but recommended:

- Docker Desktop (includes Docker Compose)  
  https://www.docker.com/products/docker-desktop/

---

## Setup Options

You can run this project using **ONE** of the following methods:

1. Local setup (recommended)
2. Docker setup
3. Docker Compose setup

---

## Option 1: Local Setup (Recommended)

### Step 1: Clone the repository

git clone <REPOSITORY_URL>  
cd <PROJECT_FOLDER>

### Step 2: Install dependencies

npm install

### Step 3: Verify PostgreSQL is running

psql -U postgres

Exit with:

\q

### Step 4: Create a `.env` file in the project root

DATABASE_URL=postgresql://postgres:<YOUR_PASSWORD>@localhost:5432/postgres  
PORT=3000

Replace `<YOUR_PASSWORD>` with your local PostgreSQL password.

### Step 5: Run Prisma migrations

npx prisma migrate dev

If Prisma reports schema drift on first run:

npx prisma migrate reset

Note: This will reset the database and delete all data (safe for development).

### Step 6: Start the application

npm run dev

The server will run at:

http://localhost:3000

---

## Option 2: Docker Setup

### Step 1: Start PostgreSQL using Docker

docker run -d --name postgres-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=postgres -p 5432:5432 postgres

### Step 2: Update `.env`

DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres  
PORT=3000

### Step 3: Run Prisma and start the app

npx prisma migrate dev  
npm run dev

---

## Option 3: Docker Compose Setup

### Step 1: Install Docker Desktop

https://www.docker.com/products/docker-desktop/

### Step 2: Start all services

docker-compose up

### Step 3: Stop all services

docker-compose down

---

## Useful Prisma Commands

npx prisma studio  
npx prisma generate  
npx prisma migrate dev  
npx prisma migrate reset  

---

## Common Issues

### Prisma authentication error (P1000)

- Ensure PostgreSQL is running
- Verify username and password in `.env`
- Test manually:

psql -U postgres

### Database drift detected

This is normal for first-time setup on an existing database:

npx prisma migrate reset

---

## Contribution Workflow

1. Fork the repository  
2. Create a new branch  

git checkout -b feature/your-feature-name

3. Make your changes  
4. Test locally  
5. Commit with a clear message  
6. Open a Pull Request  

---

## Code Guidelines

- Use TypeScript
- Follow the existing project structure
- Keep commits small and focused
- Write clear and descriptive commit messages

---

## Need Help?

If you face any issues, please open an issue with:

- Operating system
- Node.js version
- Error logs
- Steps to reproduce

---

Thank you for contributing.  
Happy coding 🚀
