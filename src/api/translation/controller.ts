import { baseController } from '../base/base.controller';
import { config } from './config';
import { TranslationService } from './service';
import { DatabaseConnection } from '../../database/database';
import { TranslationRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const translationController = (database: DatabaseConnection) => {
  const repository = new TranslationRepository(database, queryBuilder);
  const service = new TranslationService(repository);

  class TranslationController extends baseController<TranslationService, any>(getFilters) {}

  return new TranslationController(service, config);
};
