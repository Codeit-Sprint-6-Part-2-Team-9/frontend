import { useMutation, useQueryClient } from '@tanstack/react-query';
import putContribute from './putContribute';
import { QUERY_KEYS } from '../config';

const useDonationMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ donationId, creditsToDonate }) =>
            putContribute(donationId, creditsToDonate),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.donations }),
    });
}

export default useDonationMutation;
