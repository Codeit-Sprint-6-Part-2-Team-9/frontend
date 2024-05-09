import { useInfiniteQueryForFandomKAPI } from '../utils';
import { serverStateKeys } from '../config';
import getIdols from './getIdols';

function useIdolsQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: serverStateKeys.idol,
        queryFunction: getIdols,
    });
}
export default useIdolsQuery;
