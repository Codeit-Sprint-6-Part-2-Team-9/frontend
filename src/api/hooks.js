import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ENV } from './config';

function useInfiniteQueryForFandomKAPI({
    serverStateKey, queryFunction, queryArguments = {}, pageName = 'list', defaultPageSize = ENV.pageSize,
}) {
    const [nextDataSize, setNextDataSize] = useState(defaultPageSize);
    
    const reduceAllPagesWithListName = (pages, listName) => pages.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[listName]], []);

    const requestNextPage = async (requestLength = nextDataSize) => {
        if(hasNextPage && !isFetching) {
            if(requestLength !== nextDataSize)
                setNextDataSize(requestLength);
            await fetchNextPage();
        }
    }

    const {
        data,
        dataUpdatedAt,
        error,
        errorUpdateCount,
        errorUpdatedAt,
        failureCount,
        failureReason,
        fetchStatus,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPaused,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        status,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
    } = useInfiniteQuery({
        queryKey: [serverStateKey, queryArguments],
        queryFn: ({ queryKey, pageParam }) => {
            let [, args] = queryKey;
            args = {
                ...args,
                cursor: pageParam,
                nextDataSize,
            };
            return queryFunction(args);
        },
        select: (multiPageData) => ({
            pages: [reduceAllPagesWithListName(multiPageData.pages, pageName)],
            pageParams: [multiPageData.pageParams[multiPageData.pageParams.length - 1]],
        }),
        initialPageParam: 0,
        // eslint-disable-next-line
        getNextPageParam: (_lastPage, _allPages, lastPageParam, _allPageParams) =>
            lastPageParam,
    });

    return {
        data,
        dataUpdatedAt,
        error,
        errorUpdateCount,
        errorUpdatedAt,
        failureCount,
        failureReason,
        fetchStatus,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isLoading,
        isLoadingError,
        isPaused,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        status,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
        requestNextPage
    };
}

export { useInfiniteQueryForFandomKAPI };
