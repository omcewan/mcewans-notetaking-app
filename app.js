const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const notesApiRoutes = require("./routes/apiRoutes/notesApi");
const indexRoutes = require("./routes/htmlRoutes/index");
const notesRoutes = require("./routes/htmlRoutes/notes");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

app.use("/api", notesApiRoutes);
app.use("/", notesRoutes);
app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server now live on ${PORT}!`);
});
