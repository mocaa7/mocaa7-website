import express from 'express';

/** Default port used to start web application locally. */
const DEFAULT_PORT = 8080;

const app = express();
app.use(express.static('docs'));

const port = process.env.PORT || DEFAULT_PORT;
app.listen(port);

console.log('Started listening on http://localhost:' + port);
