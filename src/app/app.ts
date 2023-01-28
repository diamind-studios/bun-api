import { Bagel } from '@kakengloh/bagel';
import { initializeMiddlewares, initializeControllers } from './intializers';

export const bunApp = (): Bagel => {
  const app = new Bagel();
  initializeMiddlewares(app);
  initializeControllers(app);
  return app;
};
