import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type ContainerProps = {
	$isActive: boolean
}

const activeStyles = css`
	background: rgba(0, 0, 0, 0.5);
	color: var(--white);

	&::before {
		opacity: 1;
	}
`

export const Container = styled(Link) <ContainerProps>`
	position: relative;
	display: flex;
	height: 5rem;
	color: var(--gray);

	align-items: center;
	justify-content: center;

	transition: ease 0.3s;

	svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	&::before {
		content: '';
		height: 100%;
		width: 3px;
		background: var(--red);

		position: absolute;
		left: 0;

		opacity: 0;
		transition: ease 0.3s;
	}

	&:hover {
		${activeStyles}
	}

	${({ $isActive }) => $isActive && activeStyles}
`