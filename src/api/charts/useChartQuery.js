import { useInfiniteQueryForFandomKAPI } from '../hooks';
import { serverStateKeys } from '../config';
import getCharts from './getCharts';

function useChartQuery(gender = 'female') {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: serverStateKeys[`${gender}Chart`],
        queryArguments: { gender },
        queryFunction: getCharts,
    });
}

export default useChartQuery;