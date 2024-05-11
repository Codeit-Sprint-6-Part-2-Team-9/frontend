/* eslint-disable no-console */
import NotFound from "../../pages/NotFound";
import useDonationQuery from "./useDonationQuery";
import useDonationMutation from "./useDonationMutation";
import useCredits from "../credits/useCredits";
import CreditExample from "../credits/CreditExample";

function DonationQueryExample() {
    const { data, isFetching, isLoading, isError, fetchNextPage, hasNextPage } = useDonationQuery();
    const { mutate: sendDonation } = useDonationMutation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [credits, chargeCredits, payCredits, newCredits] = useCredits();
    if(isLoading) {
        return (<>Loading</>);
    }

    if(isError) {
        return (<NotFound errorMessage="오류가 발생하였습니다."/>);
    }
    const allPage = data.pages[0];

    const requestNextPage = async ()=>{
        if(hasNextPage && !isFetching) {
            await fetchNextPage();
        }
    }

    const payDonation = (amount, id) => {
        try {
            payCredits(amount);
            sendDonation({
                donationId: id,
                creditsToDonate: amount,
            });
        } catch (e) {
            console.log(e.errorMessage);
        } finally {
            console.log(`${id}에 대한 ${amount}의 결제 종료됨`);
        }
    }

    return (
        <div>
            <CreditExample/>
            {allPage.map((donation, index) => (
                    <div key={index}>
                        {donation.title}
                        <br/>
                        {donation.idol.name}
                        {[500, 1000, 2000].map((value) => <button key={value} type='button' onClick={() => payDonation(value, donation.id)}>{donation.idol.name}에게 {value}만큼 기부하기</button>)}
                    </div>
                ))}

            <button type='button' disabled={!hasNextPage} onClick={requestNextPage}>getNextPage</button>
        </div>
    );
}

export default DonationQueryExample;
