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

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.post("api/corses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send(`dadash nist ${req.params.id} moredd`);

    res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send(`dadash nist ${req.params.id} moredd`);

    // Validate

    // If invalid, return 400 - Bad request

    // Update Course 
    // Return the updated course
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));