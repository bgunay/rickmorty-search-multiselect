import { LinkProps, useRouteMatch } from 'react-router-dom'

import * as S from './styles'

type ActiveLinkProps = LinkProps

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
	const match = useRouteMatch(`${rest.to}`)

	return (
		<S.Container $isActive={!!match?.isExact} {...rest}>
			{children}
		</S.Container>
	)
}
