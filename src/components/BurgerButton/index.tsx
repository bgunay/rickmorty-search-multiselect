import { ButtonHTMLAttributes } from "react"

import * as S from './styles'

type BurguerButton = ButtonHTMLAttributes<HTMLButtonElement> & {
	isActive?: boolean
}

export function BurgerButton({ isActive = false, ...rest }: BurguerButton) {
	return (
		<S.Container isActive={isActive} {...rest}>
			<div />
			<div />
			<div />
		</S.Container>
	)
}