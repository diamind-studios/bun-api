import { Bagel } from '@kakengloh/bagel';
import { setHeaders } from '../middleware/custom.cors';
import { loggerMiddleware } from '../middleware/logger';
import { controllers } from './controllers';

export const initializeMiddlewares = (app: Bagel) => {
  // app.use(helmet());
  app.use(setHeaders);
  // app.use(customCors);
  app.use(loggerMiddleware);
};
export const initializeControllers = (app: Bagel) => {
  controllers.forEach((controller) => {
    app.mount(controller.path, controller.router);
  });
};
