import { useInfiniteQueryForFandomKAPI } from '../hooks';
import { SERVER_STATE_KEYS } from '../config';
import getIdols from './getIdols';

function useIdolsQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: SERVER_STATE_KEYS.idol,
        queryFunction: getIdols,
    });
}
export default useIdolsQuery;
