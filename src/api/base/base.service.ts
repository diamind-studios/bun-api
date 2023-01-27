import { BaseRepository } from './repository';
import { Filters } from './types';

export class BaseService<Repository extends BaseRepository> {
  repository: Repository;
  constructor(repository: Repository /* add orm object here */) {
    this.repository = repository;
  }
  async getAll(filters: Filters) {
    return await this.repository.runQuery(filters);
  }
}
