/*
    The specific keys that we want to return
    should depend on whether we are in
    production or development. We will have 
    different databases - one for production 
    and one for development.
*/

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}