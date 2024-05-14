import { useInfiniteQuery } from '@tanstack/react-query';
import { isNextPageRequestable, reduceAllPagesWithListName } from './utils';

function useInfiniteQueryForFandomKAPI({
    queryKey, queryFn, pageName = 'list',
}) {
    const requestNextPage = async () => {
        if(isNextPageRequestable(hasNextPage, isFetching)) {
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
        queryKey,
        queryFn,
        select: (multiPageData) => ({
            pages: reduceAllPagesWithListName(multiPageData.pages, pageName),
            pageParams: [multiPageData.pageParams[multiPageData.pageParams.length - 1]],
        }),
        initialPageParam: 0,
        // eslint-disable-next-line
        getNextPageParam: (lastPage, _allPages, _lastPageParam, _allPageParams) =>
            lastPage.nextCursor,
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
