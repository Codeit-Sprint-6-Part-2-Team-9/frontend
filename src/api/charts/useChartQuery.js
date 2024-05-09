import { useInfiniteQueryForFandomKAPI } from '../utils';
import { serverStateKeys } from '../config';
import getCharts from './getCharts';

function useFemaleChartQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: serverStateKeys.femaleChart,
        queryArguments: { gender: 'female' },
        queryFunction: getCharts,
    });
}

function useMaleChartQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: serverStateKeys.femaleChart,
        queryArguments: { gender: 'male' },
        queryFunction: getCharts,
    });
}

export { useFemaleChartQuery, useMaleChartQuery };
