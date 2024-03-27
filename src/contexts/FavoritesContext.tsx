import { useCallback, createContext, ReactNode } from "react";

import { useStoragedState } from "../hooks/useStoragedState";

type Character = {
	id: number
	name: string
	gender: string
	image: string
}

type FavoritesContextData = {
	favorites: Character[]
	addOrDeleteFavoriteCharacter: (character: Character, isFavorited: boolean) => void
}

type FavoritesProviderProps = {
	children: ReactNode
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
	const [favorites, setFavorites] = useStoragedState<Character[]>(
		'@RickAndMortyChallenge:favorites',
		[]
	)

	const addOrDeleteFavoriteCharacter = useCallback((character: Character, isFavorited: boolean) => {
		if (isFavorited) {
			const newState = favorites.filter(favoriteChar => favoriteChar.id !== character.id)

			setFavorites(newState)
		} else {
			const newState = [...favorites, character]

			setFavorites(newState)
		}
	}, [favorites, setFavorites])

	return (
		<FavoritesContext.Provider value={{ favorites, addOrDeleteFavoriteCharacter }}>
			{children}
		</FavoritesContext.Provider>
	)
}