const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        // TODO: Add MySQL Password
        password: 'Ilovecoding1',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

// connection.connect(function (err) {
//     if (err);
// });
// app.use((req, res) => {
//     res.status(404).end();
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = connection;