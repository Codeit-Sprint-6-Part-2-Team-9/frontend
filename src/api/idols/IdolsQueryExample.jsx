import NotFound from "../../pages/NotFound";
import useIdolsQuery from "./useIdolsQuery";

function IdolsQueryExample() {
    const { data, isLoading, isFetching, isError, fetchNextPage, hasNextPage } = useIdolsQuery();
    
    if(isLoading) {
        return (<>Loading</>);
    }

    if(isError) {
        return (<NotFound errorMessage="오류가 발생하였습니다."/>);
    }

    const requestNextPage = async ()=>{
        if(hasNextPage && !isFetching) {
            await fetchNextPage();
        }
    }

    const allPage = data.pages[0];
    
    return (
        <div>
            {allPage.map((idol, index) => <div key={index}>{idol.name}</div>)}
            <button type="button" disabled={!hasNextPage} onClick={requestNextPage}>getNextPage</button>
        </div>
    );
}

export default IdolsQueryExample;
