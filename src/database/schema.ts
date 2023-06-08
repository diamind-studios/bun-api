import { Generated } from 'kysely';

type sqlite_bool = 0 | 1;

interface SourceTable {
  source_id: Generated<number>;
  name: string;
  language: string;
  date: string;
  description: string;
  url: string;
  complete: sqlite_bool;
  has_interlinear: sqlite_bool;
  full_name: string;
}

interface SourceTextTable {
  
}

export interface Database {
  source: SourceTable;
  source_text: SourceTextTable
}
