const Joi = require("joi");

const express = require("express");
const app = express();

app.use(express.json());

const courses = [{
    id: 1,
    name: "course1",
}, {
    id: 2,
    name: "course1",
}, {
    id: 3,
    name: "course1",
}, ];
app.get("/", (req, res) => {
    res.send("Hello MILAD");
});

app.post("/api/courses", (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    const result = schema.validate({});
    if (result.error) {
        res.status(400).send(result.error.details);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));