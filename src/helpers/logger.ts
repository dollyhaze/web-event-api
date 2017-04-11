import pino from 'pino';

const pretty = pino.pretty()
pretty.pipe(process.stdout)

const logger = pino({
  name: 'app',
  safe: true,
}, pretty)

export default logger
