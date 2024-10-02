import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Pagination } from '../interfaces/pagination.interface';

export const PaginationParams = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const req = ctx.switchToHttp().getRequest();
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const size = limit;
    const offset = page * limit;
    return { page, limit, size, offset };
  },
);
