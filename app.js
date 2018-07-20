const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./Routes/api');

const PORT = process.env.PORT || 8080;
const KEYS = require('./config/keys');

const app = express();


            /* Connect to MongoDB Database */

/*  After setting up a Mongo db, put the
    URI in the config and then this should work */

// mongoose.connect(Keys.mongoURI, { useMongoClient: true });



            /* Middleware and Route Handling */

/* Allows us to serve up static files */
app.use(express.static('client'));
/*  Note you may need to set up a special handler for when 
    you are in production e.g  if(process.env.NODE_ENV === 'production') 
*/


/* Example API route handler */
app.use('/api', apiRoutes);


app.listen(PORT, (err) => {
    console.log(`Now listening on port ${PORT}`);
})