import useVoteMutation from "./useVoteMutation";

function VoteMutationExample() {
    const { mutate: vote } = useVoteMutation();
    const idolId = 50;
    return (
        <button type='button' onClick={() => vote(idolId) }>{idolId}에게 투표하기</button>
    );
}

export default VoteMutationExample;