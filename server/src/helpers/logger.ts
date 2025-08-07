import winston from 'winston'

const isProduction = process.env.NODE_ENV === 'production'

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.errors({ stack: true }),
    ),
    transports: isProduction
        ? [
              new winston.transports.File({ filename: 'error.log', level: 'error' }),
              new winston.transports.File({ filename: 'combined.log' }),
          ]
        : [
              new winston.transports.Console({
                  format: winston.format.simple(),
              }),
          ],
})
