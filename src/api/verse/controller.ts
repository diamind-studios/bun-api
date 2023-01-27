import { baseController } from '../base/base.controller';
import { config } from './config';
import { verseService } from './service';
import { DatabaseConnection } from '../../database/database';
import { verseRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const verseController = (database: DatabaseConnection) => {
  const repository = new verseRepository(database, queryBuilder);
  const service = new verseService(repository);

  class verseController extends baseController<verseService, any>(getFilters) {}

  return new verseController(service, config);
};
