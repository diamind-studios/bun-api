import { baseController } from '../base/base.controller';
import { config } from './config';
import { SourceTextService } from './service';
import { DatabaseConnection } from '../../database/database';
import { SourceTextRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const sourceTextController = (database: DatabaseConnection) => {
  const repository = new SourceTextRepository(database, queryBuilder);
  const service = new SourceTextService(repository);

  class SourceTextController extends baseController<SourceTextService, any>(getFilters) {}

  return new SourceTextController(service, config);
};
