/*
    This is an example controller file. Controllers 
    are basically where we put the code that handles
    specific requests. Each controller is a function
    that receives the request and response objects.
    After doing whatever needs to be done - making 
    a new database entry for instance - the response 
    is sent back to the front-end. 
*/

const Example = require('../Models/Example');


exports.getExample = (req, res) => {
    
    console.log('Controller: getExample');

    // Do some stuff...

    /* For instance: Find all documents in Example */
    
    // Example.find({}, (err, data) => {
    //     console.log(data);
    // })
    
    res.send('hi');

}