const path = require("path");
const express = require('express');
const axios = require('axios');
const chalk = require('chalk');

const app = express();

const PORT = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

//set up views
app.set('views', viewsPath);

// set up to serve static assets from public folder
app.use(express.static(publicDirectoryPath));


//console.log()
app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});



app.get('/profile', async (req, res) => {

    
     try {
        const data = await axios.get('http://www.somaku.com/users/1');
       console.log(data.data);
        // res.sendFile(path.join(__dirname, '../views/index.html'))
        res.send(data.data);
    } catch(e){
        res.send(e)
    }
  
})

app.listen(PORT, () => {
    const terminalMessage = chalk.green.inverse(`Server is up and running in PORT ${PORT}`)
    console.log(terminalMessage);
})


