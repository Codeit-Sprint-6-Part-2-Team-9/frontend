import { useInfiniteQueryForFandomKAPI } from '../utils';
import { serverStateKeys } from '../config';
import getDonations from './getDonations';

function useDonationQuery() {
    return useInfiniteQueryForFandomKAPI({
        serverStateKey: serverStateKeys.donation,
        queryFunction: getDonations,
    });
}
export default useDonationQuery;
