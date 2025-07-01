import 'dotenv/config';
import app from "./app.js";

const PORT = process.env.API_PORT;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));