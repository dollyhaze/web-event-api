import express from 'express';
import article from './controllers/article/';
import logger from './helpers/logger';

const app = express();

app.use('/events', article)

app.listen(3000, (err) => {
  if(err) {
    return logger.error(err)
  }
  logger.info('api listening on port:', "3000")
  logger.info('api running in environment: ',  'development')
})
