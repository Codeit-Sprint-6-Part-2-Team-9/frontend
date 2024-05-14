import { useInfiniteQuery } from '@tanstack/react-query';
import { reduceMultiPageDataWithListName, getNextPageParam } from '../utils';
import getIdols from './getIdols';
import { QUERY_KEYS } from '../config';

const useIdolsQuery = (pageSizeCallback = () => 10) => useInfiniteQuery({
        queryKey: QUERY_KEYS.idols,
        queryFn: ({ queryKey, pageParam }) => getIdols({ queryKey, cursor: pageParam }, pageSizeCallback),
        select: (multiPageData) => reduceMultiPageDataWithListName(multiPageData, 'list'),
        initialPageParam: 0,
        getNextPageParam,
    })

export default useIdolsQuery;
