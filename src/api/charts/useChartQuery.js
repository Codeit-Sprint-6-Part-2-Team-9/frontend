import { useInfiniteQueryForFandomKAPI } from '../hooks';
import { SERVER_STATE_KEYS } from '../config';
import getCharts from './getCharts';

function useChartQuery(gender = 'female') {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: SERVER_STATE_KEYS[`${gender}Chart`],
        queryArguments: { gender },
        queryFunction: getCharts,
    });
}

export default useChartQuery;