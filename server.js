const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
const morgan     = require("morgan");
const mongoose   = require("mongoose");
const path       = require("path");
const db         = "mongodb://admin:root@ds123370.mlab.com:23370/ressources";
const options    = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                		replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

//===== DB CONNECTION======//
mongoose.connect(db , options);


//===== API's ROUTES =====//

app.use(express.static('build'));

app.get('*' , (req,res) => {
	res.sendFile(`${process.cwd()}/build/index.html`)
})
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })

app.listen(8080);
console.log('8080 est mon port d\'attache');
