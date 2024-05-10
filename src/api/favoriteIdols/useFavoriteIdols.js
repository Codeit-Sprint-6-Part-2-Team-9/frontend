import { useLocalStorage } from '@mantine/hooks';
import { CLIENT_STATE_KEYS } from '../config';

function useFavoriteIdols() {
  const [favoriteIdols, setFavoriteIdols] = useLocalStorage({
    key: CLIENT_STATE_KEYS.favoriteIdols,
    defaultValue: [],
  });

  function resetFavoriteIdols() {
    setFavoriteIdols([]);
  }

  function addFavoriteIdol(idolId) {
    setFavoriteIdols([...favoriteIdols, idolId]);
  }

  function removeFavoriteIdol(idolId) {
    if (favoriteIdols.length === 0) return;

    setFavoriteIdols(favoriteIdols.filter((value) => value !== idolId));
  }

  return [
    favoriteIdols,
    resetFavoriteIdols,
    addFavoriteIdol,
    removeFavoriteIdol,
  ];
}

export default useFavoriteIdols;
