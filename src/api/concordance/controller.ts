import { baseController } from '../base/base.controller';
import { config } from './config';
import { ConcordanceService } from './service';
import { DatabaseConnection } from '../../database/database';
import { ConcordanceRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const concordanceController = (database: DatabaseConnection) => {
  const repository = new ConcordanceRepository(database, queryBuilder);
  const service = new ConcordanceService(repository);

  class ConcordanceController extends baseController<ConcordanceService, any>(getFilters) {}

  return new ConcordanceController(service, config);
};
