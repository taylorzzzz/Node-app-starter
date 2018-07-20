/*
    Here is where we would place all of the keys 
    for services that we will be using in 
    production. For instance if we are using 
    a MongoDB server - probably hosted online
    somewhere like mlab - then we would place 
    the Mongo URI here. Also if we are using 
    a service like Heroku or something, we can
    set env variables (process.env.MONGO_URI) 
    so we could store the keys there.

    We would also place any API keys and cookie
    secrets here.
*/

module.exports = {
    // For Example
    mongoURI: process.env.MONGO_URI,
}