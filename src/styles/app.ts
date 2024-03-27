import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	
	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 7rem 1fr;
		grid-template-rows: 5rem 1fr 2rem;
		grid-template-areas:
			"sidebar header"
			"sidebar content"
			"sidebar footer";
	}
`