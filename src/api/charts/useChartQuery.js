import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import getCharts from './getCharts';
import { reduceMultiPageDataWithListName, getNextPageParam } from '../utils';
import { QUERY_KEYS } from '../config';

const useChartQuery = (chartName = 'female', pageSizeCallback = () => 10) => {
    const queryClient = useQueryClient();
    const useChartQueryBase = useInfiniteQuery({
        queryKey: QUERY_KEYS[`${chartName}Chart`],
        queryFn: ({queryKey, pageParam: cursor}) => getCharts({ gender: queryKey[0], cursor }, pageSizeCallback),
        select: (multiPageData) => reduceMultiPageDataWithListName(multiPageData, 'idols'),
        initialPageParam: 0,
        getNextPageParam,
        }
    );

    const refetchForDesktopSize = async (currentSize) => {
        console.log(`called with ${currentSize}`)
        const nextSize = (Math.ceil(currentSize / 10) * 10);
        const data = await queryClient.fetchInfiniteQuery({
            queryKey: QUERY_KEYS[`${chartName}Chart`],
            queryFn: ({ queryKey }) => getCharts({ gender: queryKey[0], cursor: 0 }, () => nextSize),
        });
        return data;
    }
    return { ...useChartQueryBase, refetchForDesktopSize };
}

export default useChartQuery;