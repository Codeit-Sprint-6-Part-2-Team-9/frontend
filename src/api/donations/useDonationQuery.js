import { useInfiniteQueryForFandomKAPI } from '../hooks';
import { SERVER_STATE_KEYS } from '../config';
import getDonations from './getDonations';

function useDonationQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: SERVER_STATE_KEYS.donation,
        queryFunction: getDonations,
    });
}
export default useDonationQuery;
