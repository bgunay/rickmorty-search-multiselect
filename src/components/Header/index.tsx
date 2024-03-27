import * as S from './styles'

type HeaderProps = {
	id?: string
	title: string
}

export function Header({ id, title }: HeaderProps) {
	return (
		<S.Container id={id}>
			<div>
				<strong>{title}</strong>
			</div>
		</S.Container>
	)
}
