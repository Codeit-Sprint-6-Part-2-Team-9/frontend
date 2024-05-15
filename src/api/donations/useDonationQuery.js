import { useInfiniteQuery } from '@tanstack/react-query';
import { reduceMultiPageDataWithListName, getNextPageParam } from '../utils';
import getDonations from './getDonations';
import { QUERY_KEYS } from '../config';

const useDonationQuery = (pageSizeCallback = () => 9999999) =>
  useInfiniteQuery({
    queryKey: QUERY_KEYS.donations,
    queryFn: ({ queryKey, pageParam }) =>
      getDonations({ queryKey, cursor: pageParam }, pageSizeCallback),
    select: (multiPageData) =>
      reduceMultiPageDataWithListName(multiPageData, 'list'),
    initialPageParam: 0,
    getNextPageParam,
  });

export default useDonationQuery;
