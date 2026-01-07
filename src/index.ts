import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prismaClient = new PrismaClient();

const port: number = 3000;

app.use(express.json());

// Endpoint to create a user
app.post('/', async (req,res) => {
await prismaClient.user.create({
    data: {
        username: Math.random().toString(),
        password: Math.random().toString()
    }
  });
    res.json({ message: 'User created' });
});

// Endpoint to fetch all users
app.get('/', async (req,res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        data
    })

});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});