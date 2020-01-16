const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');

const app = express();

app.use('/graphql', expressGraphql({
    schema:schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Server is lstening on port 4000...');
})