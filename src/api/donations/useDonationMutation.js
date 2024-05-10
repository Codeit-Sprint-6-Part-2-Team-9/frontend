import { useMutation, useQueryClient } from '@tanstack/react-query';
import postContribute from './postContribute';
import { SERVER_STATE_KEYS } from '../config';

function useDonationMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newDonation) =>
            postContribute(newDonation),
        onSuccess: () =>
            queryClient.invalidateQueries(SERVER_STATE_KEYS.donation),
    });
}

export default useDonationMutation;
