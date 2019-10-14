import winston from "winston";

function loadLogger({ config }: { config: any }) {
  const options: winston.LoggerOptions = {
    transports: [
      new winston.transports.Console({
        level: config.env === "production" ? "error" : "debug"
      }),
      new winston.transports.File({ filename: "debug.log", level: "debug" })
    ]
  };

  const logger = winston.createLogger(options);

  if (config.env !== "production") {
    logger.debug("Logging initialized at debug level");
  }

  return logger;
}

export default loadLogger;
