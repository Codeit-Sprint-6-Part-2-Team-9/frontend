import useChartQuery from "./useChartQuery";
import NotFound from "../../pages/NotFound";

function ChartQueryExample() {
    const { data, requestNextPage, isLoading, isError, hasNextPage } = useChartQuery('female');

    if (isLoading) {
        return <>Loading</>;
    }

    if (isError) {
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

export default ChartQueryExample;
