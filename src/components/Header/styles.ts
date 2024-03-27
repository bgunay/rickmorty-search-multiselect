import styled from "styled-components";

export const Container = styled.header`
	grid-area: header;
	background: var(--white);
	height: 4rem;

	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 100%;
		max-width: var(--screen-content);
		padding: 0 1rem 0 6rem;

		strong{
			font-size: 1.25rem;
			color: var(--heading);
		}
	}

	@media (min-width: 500px) {
		height: 100%;

		div {
			padding: 0 1rem;
		}
	}
`