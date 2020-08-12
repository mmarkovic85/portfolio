/*
 * Server starting file
 *
 * Imported Express App is set to listen on dedicated port
 */
const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is live on port ${port}.`));
