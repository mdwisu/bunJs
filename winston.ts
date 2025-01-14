import winston from "winston";

const logger = winston.createLogger({
  level: "info", //debug
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

logger.info("Hello, world!");
logger.warn("Hello, world!");
logger.error("Hello, world!");