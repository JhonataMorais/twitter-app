const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Iniciando o DB
mongoose.connect(
	"mongodb://localhost:27017/goweek",
	{ useNewUrlParser: true}
);

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use( (req, res, next) => {
	req.io = io;

	return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});