const mongoose = require('mongoose');
const URI =  "mongodb+srv://StudioUser:9FFB07troWV7SxJw@cluster0.5tel0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is Up'))
    .catch((err) => console.log(err));
