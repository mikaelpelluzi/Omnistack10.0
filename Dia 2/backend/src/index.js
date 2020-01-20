const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const routes = require ('./routes');
const http = require('http');
const { setupWebsocket } = require('./utils/websocket');

const app = express();
const serve = http.Server(app);

setupWebsocket(serve);

mongoose.connect('mongodb+srv://pelluzi96:Map3796@pelluzi96-pf4ha.gcp.mongodb.net/omni10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

serve.listen(3333);
