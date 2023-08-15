const express = require('express');

const { PrismaClient } = require('@prisma/client');

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

// TODO find a way to use process.env.PORT here
app.listen(3000, () => {
    console.log("Server listening on PORT: ", 3000);
});

app.get("/status", (req, res) => {
    const status = {
        "Status": "Running"
    };

    res.send(status);
});

app.post("/sign-up", async (req, res) => {
    const { email, password, gender } = req.body;

    const user = await prisma.user.create({
        data: {
            email: email,
            password: password,
            gender: gender
        }
    });

    return res.send(user);
});

const NOT_AUTHORIZED_ERROR = "Email ou senha incorretos";

app.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;

    const login = await prisma.user.findFirst({
        where: {
            email: email,
            password: password
        }
    });

    if (login === null) {
        return res.status(400).send(NOT_AUTHORIZED_ERROR).end();
    }

    return res.send(login);
});