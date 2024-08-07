import { createLogger, format, transports } from "winston";

const logger = createLogger({
  transports: [
    new transports.File({
        dirname: "logs",
        filename: "app.log",
        level: "info",
    }),
    new transports.File({
        dirname: "logs",
        filename: "error.log",
        level: "error"      
    })
  ],
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    )
});

export default logger;