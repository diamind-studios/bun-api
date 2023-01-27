import { BagelRequest, BagelResponse, Router } from '@kakengloh/bagel';
import { EMPTY } from '../../common/constants';
import { BaseService } from './base.service';
import { sendResponse } from '../../common/response';
import { ControllerConfig, Filters } from './types';
import { errorHandlerWrapper } from './error.wrapper';

export const baseController = <Service extends BaseService<any>, Entity>(getFilters: (params: any) => Filters) => {
  class BaseController {
    public router = new Router();
    public path: string;
    public service: Service;
    public getFilters: any = getFilters;

    constructor(service: Service, config: ControllerConfig) {
      this.service = service;
      this.path = config.path;
      this.intializeRoutes();
    }

    intializeRoutes() {
      this.router.get(EMPTY, errorHandlerWrapper(this.getAll));
    }

    getAll = async (request: BagelRequest, response: BagelResponse, next: any) => /*: ApiResponse<Entity[]>*/ {
      const filters = this.getFilters(request.query);
      const responseData: Entity[] = await this.service.getAll(filters);
      sendResponse(response, responseData);
    };
  }
  return BaseController;
};
