const reduceAllPagesWithListName = (pages, listName) => 
    pages.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[listName]], []);

const reduceAllPageParams = (pageParams) => [pageParams[pageParams.length - 1]];

const reduceMultiPageDataWithListName = (multiPageData, listName) => ({
    pages: reduceAllPagesWithListName(multiPageData.pages, listName),
    pageParams: reduceAllPageParams(multiPageData.pageParams),
});

const reduceMultiPageData = (multiPageData) => reduceMultiPageDataWithListName(multiPageData, 'list');

const requestNextPage = async ({ hasNextPage, isFetching, fetchNextPage }) => {
    if(hasNextPage && !isFetching) {
        await fetchNextPage();
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getNextPageParam = (lastPage, _allPages, _lastPageParam, _allPageParams) =>
    lastPage.nextCursor;

export { requestNextPage, reduceMultiPageDataWithListName, reduceMultiPageData, getNextPageParam };