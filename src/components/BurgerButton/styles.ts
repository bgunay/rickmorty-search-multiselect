import styled from "styled-components";

type ContainerProps = {
	isActive: boolean
}

export const Container = styled.button<ContainerProps>`
	height: 2rem;
	width: 2rem;
	border: 0;
	border-radius: 50%;
	background: transparent;

	z-index: 2;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	div {
		height: 4px;
		width: 100%;
		background: ${({ isActive }) => isActive ? 'var(--white)' : 'var(--black)'};
		border-radius: 10px;
		transform-origin: 1px;

		transition: all 0.3s linear;

		position: relative;

		&:first-child {
			transform: ${({ isActive }) => isActive ? 'rotate(45deg)' : 'rotate(0)'};
		}

		&:nth-child(2) {
			opacity: ${({ isActive }) => isActive ? 0 : 1};
			transform: ${({ isActive }) => isActive ? 'translateX(20px)' : 'translateX(0)'};
		}

		&:last-child {
			transform: ${({ isActive }) => isActive ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}

	@media (min-width: 500px) {
		display: none;
	}
`