import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = format;
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

// custom log format
const myFormat = printf(({ level, message, label = 'default', timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} || ${label}," ${level}: ${message} "`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Mainur Replied' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  //   defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'mreu-%DATE%-success.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Ohh!' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'mreu-%DATE%-error.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorLogger };

// logs/winston
// successes/success.log
// errors/error.log

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   //   defaultMeta: { service: 'user-service' },
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({
//       filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
//       level: 'info',
//     }),
//   ],
// });

// const myFormat = printf(({ level, message, label = 'default', timestamp }) => {
//   const date = new Date(timestamp);
//   const hour = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${date.toDateString()} ${hour}:${minutes}:${seconds} || ${label}," ${level}: ${message} "`;
// });

// const logger = createLogger({
//   level: 'info',
//   format: combine(
//     label({ label: 'Mainur Replied' }),
//     timestamp(),
//     myFormat,
//     prettyPrint(),
//   ),
//   //   defaultMeta: { service: 'user-service' },
//   transports: [
//     new transports.Console(),
//     new transports.File({
//       filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
//       level: 'info',
//     }),
//   ],
// });
