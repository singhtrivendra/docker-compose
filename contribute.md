# 🚀 Contributing Guide

Thank you for your interest in contributing to this project! This guide will walk you through the setup process step-by-step.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Setup Options](#-setup-options)
- [Option 1: Manual Installation (Recommended)](#-option-1-manual-installation-recommended)
- [Option 2: Docker Installation](#-option-2-docker-installation)
- [Option 3: Docker Compose Installation](#-option-3-docker-compose-installation)
- [Useful Commands](#-useful-commands)
- [Troubleshooting](#-troubleshooting)
- [Contributing Workflow](#-contributing-workflow)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download Link |
|------|---------|---------------|
| **Node.js** | v18 or later | [Download](https://nodejs.org/en/download) |
| **Git** | Latest | [Download](https://git-scm.com/downloads) |
| **PostgreSQL** | Latest | [Download](https://www.postgresql.org/download/) |
| **Docker Desktop** *(optional)* | Latest | [Download](https://www.docker.com/products/docker-desktop/) |

---

## 🎯 Setup Options

Choose **ONE** of the following setup methods:

1. **Manual Installation** - Best for beginners and Windows users
2. **Docker Installation** - Good for isolated environments
3. **Docker Compose Installation** - Best for production-like setup

---

## 🔧 Option 1: Manual Installation (Recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/singhtrivendra/docker-compose

```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup PostgreSQL Database

#### Start PostgreSQL locally:
```bash
# Verify PostgreSQL is running
psql -U postgres

# Exit PostgreSQL shell
\q
```

#### Go to neon.tech and get yourself a new DB

### Step 4: Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://postgres:<YOUR_PASSWORD>@localhost:5432/postgres
PORT=3000
```

> **Note:** Replace `<YOUR_PASSWORD>` with your actual PostgreSQL password

### Step 5: Run Database Migrations

```bash
npx prisma migrate dev
```

**First time setup?** If you see schema drift errors, run:
```bash
npx prisma migrate reset
```

> ⚠️ **Warning:** This will delete all existing data in the database

### Step 6: Generate Prisma Client

```bash
npx prisma generate
```

### Step 7: Start the Application

```bash
npm run dev
```

**Success!** Your app should now be running at: `http://localhost:3000`

---

## 🐳 Option 2: Docker Installation

### Step 1: Install Docker

Download and install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop/)

### Step 2: Start a New Docker Network

```bash
docker network create user-project
```

### Step 3: Start PostgreSQL Container

```bash
docker run --network user-project --name postgres -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres
```

### Step 4: Build the Docker Image

```bash
docker build --network=host -t user-project .
```

### Step 5: Run the Application Container (Start the image)

```bash
docker run -e DATABASE_URL=postgresql://postgres:1234@postgres:5432/postgres --network user-project -p 3000:3000 user-project
```


 **Success!** Your app should now be running at: `http://localhost:3000/`

---

## 🐙 Option 3: Docker Compose Installation

### Step 1: Install Docker and Docker Compose

Ensure Docker Desktop is installed (includes Docker Compose).

### Step 2: Start All Services

```bash
docker-compose up
```

To run in detached mode (background):
```bash
docker-compose up -d
```

### Step 3: Stop All Services

```bash
docker-compose down
```

To stop and remove volumes (clears database):
```bash
docker-compose down -v
```

**Success!** Your app should now be running at: `http://localhost:3000`

---

## 🛠️ Useful Commands

### Prisma Commands

| Command | Description |
|---------|-------------|
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma migrate dev` | Create and apply migrations |
| `npx prisma migrate reset` | Reset database and apply all migrations |

### NPM Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

---

## ❗ Troubleshooting

### Issue: Prisma Authentication Error (P1000)

**Solution:**
1. Verify PostgreSQL is running:
   ```bash
   psql -U postgres
   ```
2. Check your `.env` file for correct credentials
3. Test database connection manually

### Issue: Database Drift Detected

**Solution:**
This is normal for first-time setup. Run:
```bash
npx prisma migrate reset
```

### Issue: Port Already in Use

**Solution:**
1. Find the process using port 3000:
   ```bash
   # On Windows
   netstat -ano | findstr :3000
   
   # On Mac/Linux
   lsof -i :3000
   ```
2. Kill the process or change the port in `.env`

### Issue: Docker Container Won't Start

**Solution:**
1. Check if Docker Desktop is running
2. View container logs:
   ```bash
   docker logs <container-id>
   ```
3. Remove old containers:
   ```bash
   docker-compose down -v
   docker system prune
   ```

---

## 🤝 Contributing Workflow

### 1. Fork the Repository

Click the "Fork" button on GitHub

### 2. Clone Your Fork

```bash
git clone https://github.com/<YOUR_USERNAME>/docker-compose
cd docker-compose
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Test your changes thoroughly

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

**Commit Message Guidelines:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository on GitHub and click "New Pull Request"

---

## 📝 Code Guidelines

-  Use **TypeScript** for type safety
-  Follow the existing **project structure**
-  Write **clear, descriptive** commit messages
-  Keep commits **small and focused**
-  Add **comments** for complex logic
-  Test your changes before submitting

---

## 🆘 Need Help?

If you encounter any issues, please open a GitHub issue with:

- 🖥️ **Operating System** (Windows/Mac/Linux)
- 📦 **Node.js Version** (`node --version`)
- 🐛 **Error Logs** (full error message)
- 🔄 **Steps to Reproduce** the issue

---

## 📞 Community & Support

- 💬 Open an issue on GitHub
- 📧 Contact the maintainers
- 🌟 Star the repository if you find it helpful!

---

<div align="center">

**Thank you for contributing!** 🎉

Happy Coding! 💻✨

Made with ❤️ by the community

</div>