import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

function useInfiniteQueryForFandomKAPI({
    serverStateKey, queryFunction, queryArguments = {},
    }) {
    return useInfiniteQuery({
        queryKey: [serverStateKey, queryArguments],
        queryFn: ({ queryKey, pageParam }) => {
            const [, args] = queryKey;
            args.cursor = pageParam;
            return queryFunction(args);
        },
        initialPageParam: 0,
        // eslint-disable-next-line
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
            lastPage.nextCursor,
        // eslint-disable-next-line
        getPreviousPageParam: (firstPage, allPages, fitstPageParam, allPageParams) => {
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
