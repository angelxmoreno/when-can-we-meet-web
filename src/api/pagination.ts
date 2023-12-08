import { BaseEntity } from '@app/api/entities';

export type PaginationResponse = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
};

export type PaginatedResponse<T extends BaseEntity = BaseEntity> = {
    pagination: PaginationResponse;
    items: T[];
};
export type PaginationParams<T extends BaseEntity = BaseEntity> = {
    page?: number;
    limit?: number;
    orderBy?: keyof T;
    orderDir?: 'ASC' | 'DESC';
};
