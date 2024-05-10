import { useState } from "react";
import NotFound from "../../pages/NotFound";
import useDonationQuery from "./useDonationQuery";
import useDonationMutation from "./useDonationMutation";

function DonationQueryExample() {
    const { data, isLoading, isError, fetchNextPage, hasNextPage } = useDonationQuery();
    const { sendDonation } = useDonationMutation();
    const [page, setPage] = useState(0);

    const isFetchThrottled = false;

    if(isLoading) {
        return (<>Loading</>);
    }

    if(isError) {
        return (<NotFound errorMessage={"오류가 발생하였습니다."}/>);
    }

    const donationPage = data.pages[page].idols;
    const isNextPageAvailable = data.pages[data.pages.length - 1].nextCursor !== null || page < data.pages.length - 1;
    const isPreviousPageAvailable = page > 0;

    const moveToPreviousPage = () => isPreviousPageAvailable && setPage(page - 1);
    const moveToNextPage = async () => {
        if(hasNextPage) {
            if(isFetchThrottled) {
                console.log('throttled');
                return;
            }
            await fetchNextPage();
        }
        setPage(page + 1);
    }
    const payDonation = (amount, id) => {
        try {
            function payCredit(value) {
                if(value < 1000) {
                    throw Error('not enough');
                }
                sendDonation(id);
            }
            payCredit(amount);
        } catch (e) {
            console.log(e.errorMessage);
        } finally {
            console.log(`${id}에 대한 ${amount}의 결제 종료됨`);
        }
    }

    return (
        <div>
            {donationPage.map((donation, index) => {
                return (
                    <div key={index}>
                        {donation.title}
                        {donation.idol.name}
                        {[500, 1000, 2000].map((value) => {
                            return <button onClick={() => payDonation(value, donation.id)}>{donation.id}에게 {value}만큼 기부하기</button>
                        })}
                    </div>
                );
            })}

            <button disabled={!isNextPageAvailable} onClick={moveToNextPage}>getNextPage</button>
            <button disabled={!isPreviousPageAvailable} onClick={moveToPreviousPage}>
                getPreviousPage
            </button>
        </div>
    );
}

export default DonationQueryExample;
