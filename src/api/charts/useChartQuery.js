import { useInfiniteQuery } from '@tanstack/react-query';
import getCharts from './getCharts';
import { reduceMultiPageDataWithListName, getNextPageParam } from '../utils';
import { QUERY_KEYS } from '../config';

const useChartQuery = (chartName = 'female', pageSizeCallback = () => 10) => useInfiniteQuery({
        queryKey: QUERY_KEYS[`${chartName}Chart`],
        queryFn: ({queryKey, pageParam: cursor}) => getCharts({ gender: queryKey[0], cursor }, pageSizeCallback),
        select: (multiPageData) => reduceMultiPageDataWithListName(multiPageData, 'idols'),
        initialPageParam: 0,
        getNextPageParam,
    }
);

export default useChartQuery;