import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Pagination from "react-paginate";

import { Header } from "../../components/Header";
import { CharacterCard } from "../../components/CharacterCard";
import { Load } from "../../components/Load";
import { NotFound } from "../../components/NotFound";

import { api } from "../../services/api";

import * as S from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Multiselect from "multiselect-react-dropdown";
import { useFavorites } from "../../hooks/useFavorites";

type Character = {
  id: number;
  name: string;
  gender: string;
  image: string;
  boldChars: [number, number];
};

type CharacterResponse = {
  info: {
    pages: number;
    count: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export function Home() {
  const [characters, setCharacters] = useState<CharacterResponse | null>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notFounded, setNotFounded] = useState(false);
  const { favorites } = useFavorites();

  const paginationPageRange = useMediaQuery("(max-width: 500px)", 1, 3);

  async function handleSearchCharacters() {
    if (!searchText.trim()) {
      setCharacters(null);
      return;
    }

    try {
      setNotFounded(false);
      setIsLoading(true);

      const response = await api.get<CharacterResponse>(
        `/character/?name=${searchText}`
      );

      setSearchedText(searchText);
      setCharacters(response.data);
    } catch {
      setCharacters(null);
      setSearchedText("");
      setNotFounded(true);
    } finally {
      setIsLoading(false);
      setPage(0);
    }
  }

  async function handleChangePage(selectedPage: number) {
    try {
      setPage(selectedPage);
      const response = await api.get<CharacterResponse>(
        `/character/?name=${searchedText}&page=${selectedPage + 1}`
      );

      setCharacters(response.data);
    } catch {
      setCharacters(null);
      setPage(0);
    }
  }

  const { addOrDeleteFavoriteCharacter } = useFavorites();

  const onSelect = (selectedList: string[], selectedItem: Character): void => {
    setSearchText(selectedItem.name);
    handleSearchCharacters();
    console.log(selectedItem);
  };

  const onRemove = (selectedList: string[], character: Character): void => {
    console.log(character);
    addOrDeleteFavoriteCharacter(character, true);
  };

  return (
    <>
      <Header id="homepage-top" title="Start" />

      <S.Container>
        <S.SearchContainer>
          <form>
            <S.SearchInput htmlFor="search" isFilled={!!searchText.trim()}>
              <FiSearch aria-label="Magnifier icon" />
              <Multiselect
                selectedValues={favorites} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                hidePlaceholder={true}
                keepSearchTerm={true}
              />
              <input
                id="search"
                type="search"
                placeholder="Search for a character..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                onKeyUp={handleSearchCharacters}
              />
            </S.SearchInput>
          </form>

          {characters && characters.info.count > 0 && (
            <span>Total {characters.info.count} People</span>
          )}
        </S.SearchContainer>

        {!characters && notFounded ? <NotFound /> : isLoading && <Load />}

        {characters && (
          <>
            <S.SearchResults>
              {characters.results.map((character) => {
                const idx = character.name.toLowerCase().indexOf(searchText);
                character.boldChars = [idx, idx + searchText.length];
                return (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    isFavorited={favorites.some(
                      (favoritedChar) => favoritedChar.id === character.id
                    )}
                  />
                );
              })}
            </S.SearchResults>

            <Pagination
              pageCount={characters.info.pages}
              pageRangeDisplayed={paginationPageRange}
              marginPagesDisplayed={1}
              nextLabel="Next"
              previousLabel="Prev"
              containerClassName="pagination-container"
              forcePage={page}
              onPageChange={({ selected }) => handleChangePage(selected)}
            />

            <S.BackToTop>
              <a href="#homepage-top">Voltar ao topo</a>
            </S.BackToTop>
          </>
        )}
      </S.Container>
    </>
  );
}
