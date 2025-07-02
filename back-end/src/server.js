require('dotenv/config');
const app = require("./app.js");

const PORT = process.env.API_PORT;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));