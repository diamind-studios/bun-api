import { concordanceController } from '../api/concordance/controller';
import { parsingController } from '../api/parsing/controller';
import { sourceController } from '../api/source/controller';
import { sourceTextController } from '../api/source_text/controller';
import { translationController } from '../api/translation/controller';
import { translationTextController } from '../api/translation_text/controller';
import { verseController } from '../api/verse/controller';
import { DatabaseConnection } from '../database/database';

const database = new DatabaseConnection();

export const controllers = [
  sourceTextController(database),
  translationTextController(database),
  sourceController(database),
  translationController(database),
  concordanceController(database),
  parsingController(database),
  verseController(database),
];
