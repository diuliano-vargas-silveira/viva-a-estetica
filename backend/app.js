const express = require('express');

var cors = require('cors')

const { PrismaClient } = require('@prisma/client');

const app = express();

app.use(express.json(), cors());

const prisma = new PrismaClient();

const INSUFICIENT_DATA_ERROR = "Dados incompletos.";
const INTERNAL_SERVER_ERROR = "Ocorreu um erro no servidor";
const NOT_AUTHORIZED_ERROR = "Email ou senha incorretos";

app.listen(8080, () => {
    console.log("Server listening on port: 8080");
});

app.get("/status", (req, res) => {
    const status = {
        "Status": "Running"
    };

    res.send(status);
});

app.post("/sign-up", async (req, res) => {
    try {
        const { email, password, gender, image } = req.body;

        if (!email || !password || !image) {
            return res.status(400).send(INSUFICIENT_DATA_ERROR);
        }

        const user = await prisma.user.create({
            data: {
                email: email,
                password: password,
                gender: gender,
                image: image
            }
        });

        return res.send(user);
    }
    catch (error) {
        return res.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.post("/sign-in", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send(INSUFICIENT_DATA_ERROR);
        }

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
    } catch (error) {
        return res.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.get("/workouts/weight-loss", async (req, res) => {
    const workout = await prisma.workouts.findMany({
        where: {
            category: "WEIGHT_LOSS"
        }
    });

    return res.send(workout);
});

app.get("/workouts/gain-mass", async (req, res) => {
    const workout = await prisma.workouts.findMany({
        where: {
            category: "GAIN_MASS"
        }
    });

    return res.send(workout);
});

app.get("/workouts/keep-shape", async (req, res) => {
    const workout = await prisma.workouts.findMany({
        where: {
            category: "KEEP_SHAPE"
        }
    });

    return res.send(workout);
});

app.post("/calculate", async (req, res) => {
    try {
        const { gender, measuresSum, age } = req.body;

        if (!gender || !measuresSum || !age) {
            return res.status(400).send(INSUFICIENT_DATA_ERROR);
        }

        const MALE_CONSTANT = {
            a: 1112,
            b1: 0.00043499,
            b2: 0.00000055,
            b3: 0.00028826,
        };

        const FEMALE_CONSTANT = {
            a: 1097,
            b1: 0.00046971,
            b2: 0.00000056,
            b3: 0.00012828,
        };

        const constants = gender === "MALE" ? MALE_CONSTANT : FEMALE_CONSTANT;

        const bodyDensity =
            constants.a - constants.b1 * measuresSum + constants.b2 * Math.pow(measuresSum, 2) - constants.b3 * age;

        const bodyFatPercentage = (4.95 / bodyDensity - 4.50) * 100;

        return res.send({ bodyFatPercentage });
    } catch (error) {
        return res.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.post("/posts", async (req, res) => {
    try {
        const { imageUrl, userEmail, userPhoto } = req.body;

        if (!imageUrl || !userEmail || !userPhoto) {
            return res.status(400).send(INSUFICIENT_DATA_ERROR);
        }

        const post = await prisma.posts.create({
            data: {
                image: imageUrl,
                userEmail: userEmail,
                userPhoto: userPhoto
            }
        });

        return res.send(post);
    } catch (error) {
        return res.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.get("/posts", async (req, res) => {
    try {
        const posts = await prisma.posts.findMany();

        return res.send(posts);
    } catch (error) {
        return req.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.post("/stories", async (req, res) => {
    try {
        const { imageUrl, userEmail, userPhoto } = req.body;

        if (!imageUrl || !userEmail || !userPhoto) {
            return res.status(400).send(INSUFICIENT_DATA_ERROR);
        }

        const storie = await prisma.stories.create({
            data: {
                image: imageUrl,
                userEmail: userEmail,
                userPhoto: userPhoto
            }
        });

        return res.send(storie);
    } catch (error) {
        return res.status(500).send(INTERNAL_SERVER_ERROR);
    }
});

app.get("/stories", async (req, res) => {
    try {
        const stories = await prisma.stories.findMany();

        return res.send(stories);
    } catch (error) {
        return req.status(500).send(INTERNAL_SERVER_ERROR);
    }
});