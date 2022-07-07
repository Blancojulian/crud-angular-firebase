//Install express server
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static('./dist/herokuubsmi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/out-tsc/'})
);

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});