var mongoose = require("mongoose");
mongoose.connect('mongodb+srv://prateekeminence:11110000@cluster0.xnzkpwp.mongodb.net/fsfdfs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("open", () => {
  console.log("Db Connected!");
});

db.on("error", console.error.bind(console, "Db connection error:"));