const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
const morgan     = require("morgan");
const mongoose   = require("mongoose");
const path       = require("path");
const ressourcesHolder = require('./app/models/ressource.js');
const db         = "mongodb://admin:root@ds123370.mlab.com:23370/ressources/";
// const options    = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//                 		replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
const port = process.env.PORT || 8080;
//===== DB CONNECTION======//
mongoose.connect(db);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//===== API's ROUTES =====//
const router = express.Router();
// router.use(express.static('build'));

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


app.use(express.static('build'));

app.get('/' , (req,res) => {
	res.sendFile(`${process.cwd()}/build/index.html`)
})
// router.get('/' , (req,res) => {
// 	// res.sendFile(`${process.cwd()}/build/index.html`)
// 	res.json({ message: 'hooray! welcome to our api!' });
// })

router.route('/ress')
.post(function(req, res) {

        var ressources = new ressourcesHolder();      // create a new instance of the Bear model
        ressources.img = req.body.img;
		ressources.titre = req.body.titre;
		ressources.niveau = req.body.niveau;
		ressources.age = req.body.age;
		ressources.format = req.body.format;
		ressources.langue = req.body.langue;
		ressources.description = req.body.description;
		ressources.thumbnails1 = req.body.thumbnails1;
    ressources.thumbnails2 = req.body.thumbnails2;
    ressources.thumbnails3 = req.body.thumbnails3;
		 // set the ressources name (comes from the request)


        // save the bear and check for errors
        ressources.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Ressource created!' });
        });

    })
	.get(function(req, res) {
        ressourcesHolder.find(function(err, ressources) {
            if (err)
                res.send(err);

            res.json(ressources);
        });
    });

	router.route('/ress/:ressources_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/ressources/:bear_id)
    .get(function(req, res) {
        ressourcesHolder.findById(req.params.ressources_id, function(err, ressources) {
            if (err)
                res.send(err);
            res.json(ressources);
        });
    })
	.put(function(req, res) {

        // use our bear model to find the bear we want
        ressourcesHolder.findById(req.params.ressources_id, function(err, ressources) {

            if (err)
                res.send(err);

        ressources.img = req.body.img;
		ressources.titre = req.body.titre;
		ressources.niveau = req.body.niveau;
		ressources.age = req.body.age;
		ressources.format = req.body.format;
		ressources.langue = req.body.langue;
		ressources.description = req.body.description;
    ressources.thumbnails1 = req.body.thumbnails1;
    ressources.thumbnails2 = req.body.thumbnails2;
    ressources.thumbnails3 = req.body.thumbnails3;   // update the ressources's info

            // save the ressources
            ressources.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Ressources updated!' });
            });

        });
    })
	.delete(function(req, res) {
        ressourcesHolder.remove({
            _id: req.params.ressources_id
        }, function(err, ressources) {
            if (err)
                res.send(err);

            res.json({ message: 'Ressource successfully deleted' });
        });
    });



// router.post('/api', (res, req) => {
// 	datar.create({
//            img: req.body.img,
//            titre: req.body.titre
//        },
//        function(err, user) {
//            if (err) return res.status(500).send('There was a problem adding the information to the database.');
//            res.status(200).send(user);
//        });

// });
app.use('/api', router);
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })

app.listen(port);
console.log('8080 est mon port d\'attache');
