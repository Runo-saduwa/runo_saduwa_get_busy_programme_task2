const path = require('path');
const chalk = require('chalk');
const express = require('express');
 // ============= API Routes =================
const home = require('./routes/api/home');
const profile = require('./routes/api/profile');


const app = express();
const PORT = 3000;

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');

//set up views
app.set('views', viewsPath);
// set up to serve static assets from public folder
app.use(express.static(publicDirectoryPath));

//Use Routes  ===========================================================
app.use(home);
app.use(profile);



app.listen(PORT, () => {
	const terminalMessage = chalk.green.inverse(`Server is up and running in PORT ${PORT}`);
	console.log(terminalMessage);
});
