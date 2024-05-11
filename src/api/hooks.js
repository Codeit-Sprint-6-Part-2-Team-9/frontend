import { useInfiniteQuery } from '@tanstack/react-query';

function useInfiniteQueryForFandomKAPI({
    serverStateKey, queryFunction, queryArguments = {}, pageName = 'list',
}) {
    const reduceAllPagesWithListName = (pages, listName) => pages.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[listName]], []);
    
    const requestNextPage = async ()=>{
        if(hasNextPage && !isFetching) {
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
            const [, args] = queryKey;
            args.cursor = pageParam;
            return queryFunction(args);
        },
        select: (multiPageData) => ({
            pages: [reduceAllPagesWithListName(multiPageData.pages, pageName)],
            pageParams: [multiPageData.pageParams[multiPageData.pageParams.length - 1]],
        }),
        initialPageParam: 0,
        // eslint-disable-next-line
        getNextPageParam: (lastPage, _allPages, _lastPageParam, _allPageParams) =>
            lastPage.nextCursor,
        // eslint-disable-next-line
        getPreviousPageParam: (_firstPage, allPages, _fitstPageParam, _allPageParams) => {
            switch (allPages.length) {
                case 0:
                case 1: return null;
                case 2: return 0;
                default: return allPages[allPages.length - 3].nextCursor;
            }
        },
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
