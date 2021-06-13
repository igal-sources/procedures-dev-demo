import { createLogger, transports, format } from "winston";

const logger = createLogger({
  exitOnError: false,
  levels: { error: 0, warn: 1, info: 2, verbose: 3 },
  transports: [
    process.env.NODE_ENV !== "production" &&
      new transports.Console({
        handleExceptions: true,
        level: "info", //window.LOG_LEVEL,
        format: format.json(),
      }),
  ].filter(Boolean),
});

const logFactory = (category, contextId, appId = "CityShob") => {
  const thread = "main";

  function log(level, messageText) {
    const currentDate = new Date().toISOString();
    const msg = {
      "@timestamp": currentDate,
      "@version": 1,
      level: level.toUpperCase(),
      thread,
      mdc: {
        appId,
        contextId,
      },
      logger_name: category,
      message: messageText,
    };
    logger[level](JSON.stringify(msg));
  }

  return {
    verbose: log.bind(null, "verbose"),
    info: log.bind(null, "info"),
    warn: log.bind(null, "warn"),
    error: log.bind(null, "error"),
  };
};

export default logFactory;
