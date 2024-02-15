const { createLogger, transports, format } = require("winston");

// create a logger instance
const logger = createLogger({
  level: "info", // log only messages with level 'info' and above
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // log to the console
    new transports.File({ filename: "app.log" }), // log to a file
  ],
});

process.on("uncaughtException", (error) => {
  errorLogger.error(`Uncaught Exception: ${error}`);
  process.exit(1);
});

const errorLogger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // log to the console
    new transports.File({ filename: "app.log" }), // log to a file
  ],
});

// using the logger

logger.info("This is an info message");
errorLogger.error("This is an error message");
logger.warn("This is a warning message");

errorLogger.debug("This should not show up");

try {
  // some code that may throw an error
  throw new Error("This is an error!");
} catch (error) {
  errorLogger.error(`An error occurred: ${error}`);
}

throw new Error("Uncaught Exception in the wild");
