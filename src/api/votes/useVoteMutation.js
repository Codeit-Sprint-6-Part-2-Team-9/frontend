import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SERVER_STATE_KEYS } from '../config';
import postVote from './postVote';

function useVoteMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (idolId) => postVote(idolId),
        onSuccess: () => Promise.all([
            queryClient.invalidateQueries(SERVER_STATE_KEYS.femaleChart),
            queryClient.invalidateQueries(SERVER_STATE_KEYS.maleChart),
        ])
    });
}

export default useVoteMutation;
