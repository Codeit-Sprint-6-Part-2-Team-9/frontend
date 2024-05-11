import { useInfiniteQuery } from '@tanstack/react-query';

function useInfiniteQueryForFandomKAPI({
    serverStateKey, queryFunction, queryArguments = {}, pageName = 'list',
}) {
    const reduceAllPagesWithListName = (pages, listName) => pages.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[listName]], []);

    return useInfiniteQuery({
        select: (data) => ({
                pages: [reduceAllPagesWithListName(data.pages, pageName)],
                pageParams: [data.pageParams[data.pageParams.length - 1]],
            }),
        queryKey: [serverStateKey, queryArguments],
        queryFn: ({ queryKey, pageParam }) => {
            const [, args] = queryKey;
            args.cursor = pageParam;
            return queryFunction(args);
        },
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
}

export { useInfiniteQueryForFandomKAPI };
