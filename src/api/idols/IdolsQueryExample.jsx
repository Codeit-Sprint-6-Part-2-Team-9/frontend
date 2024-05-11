import NotFound from "../../pages/NotFound";
import useIdolsQuery from "./useIdolsQuery";

function IdolsQueryExample() {
    const { data, isLoading, isError, requestNextPage, hasNextPage } = useIdolsQuery();
    
    if(isLoading) {
        return (<>Loading</>);
    }

    if(isError) {
        return (<NotFound errorMessage="오류가 발생하였습니다."/>);
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
