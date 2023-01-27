import { baseController } from '../base/base.controller';
import { config } from './config';
import { ParsingService } from './service';
import { DatabaseConnection } from '../../database/database';
import { ParsingRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const parsingController = (database: DatabaseConnection) => {
  const repository = new ParsingRepository(database, queryBuilder);
  const service = new ParsingService(repository);

  class ParsingController extends baseController<ParsingService, any>(getFilters) {}

  return new ParsingController(service, config);
};
