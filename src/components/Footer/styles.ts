import styled from "styled-components";

export const Container = styled.footer`
	grid-area: footer;
	background: var(--white);
	height: 3rem;
	

	display: flex;
	align-items: center;

	div {
		width: 100%;
		max-width: var(--screen-content);
		margin: 0 auto;
		padding: 0 1rem;

		display: flex;
		align-items: center;
		justify-content: center;

		small {
			color: var(--heading);
			font-size: 0.7rem;

			a {
				color: var(--red);
				text-decoration: none;

				transition: 0.2s;

				&:hover {
					filter: brightness(0.8);
				}
			}
		}
	}

	@media (min-width: 500px) {
		height: 100%;
	}
`