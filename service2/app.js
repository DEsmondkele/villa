const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4001; // Choose an appropriate port

app.get('/graphql-schema', (req, res) => {
    // Read the JSON file and send it as a response
    const schemaPath = path.join(__dirname, 'graphql/types/User.json');
    fs.readFile(schemaPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error reading schema file' });
        } else {
            const schema = JSON.parse(data);
            res.json(schema);
        }
    });
});

app.listen(port, () => {
    console.log(`Service 2 listening on port ${port}`);
});
