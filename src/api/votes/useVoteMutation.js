import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../config';
import postVote from './postVote';

const useVoteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (idolId) => postVote(idolId),
        onSuccess: () => Promise.all(
            ['maleChart', 'femaleChart', 'maleMonthChart', 'femaleMonthChart'].map(
                (chart) => { console.log(chart);
                    return queryClient.invalidateQueries({ queryKey: QUERY_KEYS[chart]})
                }
            )
        )
    });
}

export default useVoteMutation;
