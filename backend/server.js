const express = require("express");

// Server Initialization
const app = express();
const PORT = 3001;

// Middlewares
app.use(express.json());

// Routes will be written here
app.use("/news", (req, res) => {});

// Server Listen Along with Database
// connection(in case of data persistence)
app.listen(PORT, (error) => {
	if (!error)
		console.log(
			"Server is Successfully Running, and App is listening on port " + PORT
		);
	else console.log("Error occurred, server can't start", error);
});
