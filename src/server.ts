import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorLogger } from './shared/logger';

const port = config.port;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);

    logger.info(`🗄️ database is connected succesfully`);

    app.listen(port, () => {
      logger.info(`Example app listening on port ${port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database', err);
  }
}

bootstrap();
