import express from 'express';
import article from './controllers/article/';
import logger from './helpers/logger';
import cors from 'cors';
const app = express();

app.use(cors())
app.use('/events', article)


app.listen(4000, (err) => {
  if(err) {
    return logger.error(err)
  }
  logger.info('api listening on port:', "4000")
  logger.info('api running in environment: ',  'development')
})
