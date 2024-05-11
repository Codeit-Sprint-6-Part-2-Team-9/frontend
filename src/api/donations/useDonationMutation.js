import { useMutation, useQueryClient } from '@tanstack/react-query';
import putContribute from './putContribute';
import { SERVER_STATE_KEYS } from '../config';

function useDonationMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ donationId, creditsToDonate }) =>
            putContribute(donationId, creditsToDonate),
        onSuccess: () =>
            queryClient.invalidateQueries(SERVER_STATE_KEYS.donation),
    });
}

export default useDonationMutation;
