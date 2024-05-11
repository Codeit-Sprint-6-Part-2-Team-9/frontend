import useFavoriteIdols from "./useFavoriteIdols";

function FavoriteIdolsExample() {
    const [favoriteIdols, resetFavoriteIdols, addFavoriteIdol, removeFavoriteIdol] = useFavoriteIdols();

    const allIdols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            {favoriteIdols.map((idolId, index) => {
                return (
                    <div key={index}>
                        아이돌 번호: {idolId}
                        <button onClick={() => removeFavoriteIdol(idolId)}>아이돌 {idolId} 제거</button>
                    </div>
                );
            })}
            <button onClick={() => resetFavoriteIdols()}>아이돌 리셋</button>
            {allIdols.filter(
                (idolId) => !favoriteIdols.includes(idolId)
            ).map(
                (idolId, index) => {
                    return (
                        <div key={index}>
                            아이돌 번호: {idolId}
                            <br/>
                            <button onClick={() => addFavoriteIdol(idolId)}>아이돌 {idolId} 추가</button>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default FavoriteIdolsExample;
