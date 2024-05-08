import { useLocalStorage } from "@mantine/hooks";
import { ClientStateKeys } from "../config";

function useCredits() {
    const [credits, setCredits] = useLocalStorage({
        key: ClientStateKeys.credits,
        defaultValue: 0,
    });

    function newCredits() {
        setCredits(0);
    }

    function chargeCredits(amount) {
        setCredits(credits + amount);
    }

    function payCredits(amount) {
        if(credits < amount) {
            throw Error(`Not Enough Credits: requested to use ${amount} but currently has ${credits}`);
        }
        setCredits(credits - amount);
    }

    return [credits, chargeCredits, payCredits, newCredits];
}

export default useCredits;