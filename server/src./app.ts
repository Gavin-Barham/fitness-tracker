import express from 'express';

const app = express();
const port = 8080


// define a route handler for the default home page
app.get( "/api", ( req, res ) => {
    res.json({'users' : ["userOne", "userTwo", "userThree", "userFour"]});
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );