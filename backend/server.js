const express = require("express");
require("dotenv/config");

// Server Initialization
const app = express();
const PORT = 3001;

// Middlewares
app.use(express.json());

// Routes will be written here
app.get("/news", (req, res) => {
	const apiKey = process.env.NYC_API_KEY;
	const apiUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;
	fetch(apiUrl)
		.then((response) => response.json())
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send("Error fetching data from the New York Times API");
		});
});

app.use("*", (req, res) => {
	res.status(404).send("Not found");
});

// Server Listen Along with Database
// connection(in case of data persistence)
app.listen(PORT, (error) => {
	if (!error)
		console.log(
			"Server is Successfully Running, and App is listening on port " + PORT
		);
	else console.log("Error occurred, server can't start", error);
});
