import { memo } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import lodash from "lodash";
import { useFavorites } from "../../hooks/useFavorites";
import * as S from "./styles";

type Character = {
  id: number;
  name: string;
  gender: string;
  image: string;
  boldChars: [number, number];
};

type CharacterCardProps = {
  character: Character;
  isFavorited: boolean;
};

function CharacterCardComponent({
  character,
  isFavorited,
}: CharacterCardProps) {
  const { addOrDeleteFavoriteCharacter } = useFavorites();

  function nameLabel() {
    const firstIdx = character.boldChars[0];
    const secondIdx = character.boldChars[1];

    const firstStr = character.name.substring(0, firstIdx);
    const boldStr = character.name.substring(firstIdx, secondIdx);
    const lastStr = character.name.substring(secondIdx, character.name.length);
    return (
      <div>
        {firstStr}
        <strong>{boldStr}</strong>
        {lastStr}
      </div>
    );
  }

  return (
    <S.Container>
      <img src={character.image} alt={character.name} loading="lazy" />

      <S.CharacterInfo>
        <div>
          {nameLabel()}
          <p>{character.gender}</p>
        </div>

        <button
          type="button"
          title="Add to Favorites"
          onClick={() => addOrDeleteFavoriteCharacter(character, isFavorited)}
        >
          {isFavorited ? <BsHeartFill /> : <BsHeart />}
        </button>
      </S.CharacterInfo>
    </S.Container>
  );
}

export const CharacterCard = memo(
  CharacterCardComponent,
  (prevProps, nextProps) => {
    return (
      lodash.isEqual(prevProps.character, nextProps.character) &&
      prevProps.isFavorited === nextProps.isFavorited
    );
  }
);
