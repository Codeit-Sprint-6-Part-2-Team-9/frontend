import useCredits from "./useCredits";

function CreditExample() {
    const [credit, chargeCredit, payCredit] = useCredits();
    return (
        <div>
            {credit}
            <button onClick={()=>chargeCredit(500)}>500충전</button>
            <button onClick={()=>chargeCredit(1000)}>1000충전</button>
            <button onClick={()=>chargeCredit(2000)}>2000충전</button>
            <button onClick={()=>payCredit(500)}>500사용</button>
            <button onClick={()=>payCredit(1000)}>1000사용</button>
            <button onClick={()=>payCredit(2000)}>2000사용</button>
        </div>
    );
}

export default CreditExample;