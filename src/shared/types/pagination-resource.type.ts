export type PaginationResource<T> = {
  totalItems: number;
  items: T[];
  page: number;
  limit: number;
};
