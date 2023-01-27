import { baseController } from '../base/base.controller';
import { config } from './config';
import { SourceService } from './service';
import { DatabaseConnection } from '../../database/database';
import { SourceRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const sourceController = (database: DatabaseConnection) => {
  const repository = new SourceRepository(database, queryBuilder);
  const service = new SourceService(repository);

  class SourceController extends baseController<SourceService, any>(getFilters) {}

  return new SourceController(service, config);
};
