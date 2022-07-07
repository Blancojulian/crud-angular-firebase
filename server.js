const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist/crud-angular-firebase'));

app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/crud-angular-firebase/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});