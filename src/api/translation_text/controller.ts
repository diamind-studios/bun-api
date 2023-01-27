import { baseController } from '../base/base.controller';
import { config } from './config';
import { TranslationTextService } from './service';
import { DatabaseConnection } from '../../database/database';
import { TranslationTextRepository } from './repository';
import { queryBuilder } from './query';
import { getFilters } from './filters';

export const translationTextController = (database: DatabaseConnection) => {
  const repository = new TranslationTextRepository(database, queryBuilder);
  const service = new TranslationTextService(repository);

  class TranslationTextController extends baseController<TranslationTextService, any>(getFilters) {}

  return new TranslationTextController(service, config);
};
