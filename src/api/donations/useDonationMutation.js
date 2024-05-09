import { useMutation, useQueryClient } from '@tanstack/react-query';
import postContribute from './postContribute';
import { serverStateKeys } from '../config';

function useDonationMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newDonation) =>
            postContribute(newDonation),
        onSuccess: () =>
            queryClient.invalidateQueries(serverStateKeys.donation),
    });
}

export default useDonationMutation;
