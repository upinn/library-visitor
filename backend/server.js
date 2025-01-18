const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());
app.use(cors({ origin: "http://localhost:3003" }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ujianpweb"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
db.query(sql, (err, data) => {
    if (err) return res.json([]);
    return res.json(data);
    });
});

app.post("/create", (req, res) => {
    console.log("Request body:", req.body);
    const sql = "INSERT INTO student (nama_lengkap, npm) VALUES (?, ?)";
    const values = [req.body.nama_lengkap, req.body.npm];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.json("Error");
        }
        return res.json("Student added successfully");
    });
});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const { nama_lengkap, npm } = req.body;

    const sql = "UPDATE student SET nama_lengkap = ?, npm = ? WHERE id = ?";
    const values = [nama_lengkap, npm, id];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.json("Error");
        }
        return res.json("Student updated successfully");
    });
});

app.delete("/student/:id", (req, res) => {
    console.log("Request body:", req.body);
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8080, () =>{
    console.log("listening");
});