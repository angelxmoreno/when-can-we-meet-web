import { BaseEntity } from '@app/api/entities';
import { PaginatedResponse, PaginationParams } from '@app/api/pagination';
import useQueryParams from '@app/hooks/useQueryParams';
import { useQuery } from '@tanstack/react-query';
import React, { ReactElement } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useNavigate } from 'react-router-dom';

type Props<T extends BaseEntity = BaseEntity> = {
    cachePrefix: string;
    fetchFn: (params: PaginationParams) => Promise<PaginatedResponse<T>>;
    children: (items: T[], isPending: boolean) => ReactElement;
};
export default function DataView<T extends BaseEntity = BaseEntity>({
    cachePrefix,
    fetchFn,
    children,
}: Props<T>): ReactElement {
    const navigate = useNavigate();
    const queryParams = useQueryParams();
    const page = Number(queryParams.get('page') || 1);
    const initialData: PaginatedResponse<T> = {
        items: [],
        pagination: {
            page: 1,
            hasNext: false,
            hasPrev: false,
            totalItems: 10,
            limit: 10,
            totalPages: 1,
        },
    };
    const query = useQuery({
        queryKey: [cachePrefix, page],
        queryFn: () => fetchFn({ page }),
        placeholderData: (previousData, previousQuery) => {
            console.log({ previousData });
            return previousData || initialData;
        },
    });
    const { isPlaceholderData, isError, data, error } = query;

    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    if (!data) {
        return <span>Loading...</span>;
    }
    return (
        <>
            <PaginationControl
                page={page}
                between={4}
                total={data.pagination.totalItems}
                limit={data.pagination.limit}
                next
                changePage={newPage => {
                    navigate({
                        search: `page=${newPage}`,
                    });
                }}
                ellipsis={1}
            />
            {children(data.items, isPlaceholderData)}
        </>
    );
}
