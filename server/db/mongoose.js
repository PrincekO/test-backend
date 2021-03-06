const mongoose = require("mongoose");
const { logger } = require("../logger");

// Enable use of promises in mongoose
mongoose.Promise = global.Promise;

// Connect to Pescedi database, created if nonexistent 
try {
    mongoose.connect("mongodb://localhost:27017/Pescedi", {useNewUrlParser: true});
    logger.info('Successfully connected to database server');
} catch(err) {
    logger.info(err);
}

// Export mongoose 
module.exports = { mongoose };