import styled from "styled-components";

export const Container = styled.div`
  height: 30rem;
  width: 100%;
  border-radius: 0.5rem;

  background: var(--white);
  overflow: hidden;

  display: flex;
  flex-direction: row;

  img {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  @media (min-width: 500px) {
    height: 5.5rem;
  }
`;

export const CharacterInfo = styled.div`
  padding: 0 1.5rem;
  flex: 2;
  display: block;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: bolder;
    font-size: 1.25rem;
    color: var(--heading);
  }
  span {
    font-weight: normal;
  }
  p {
    font-size: 1rem;
    font-weight: var(--regular);
    line-height: 1.8rem;
    color: var(--text);
    margin-top: 0.35rem;
  }

  button {
    font-size: 0;
    background: transparent;
    border: 0;
    transition: transform 0.2s;

    svg {
      height: 1.8rem;
      width: 1.8rem;
      color: var(--red);
    }

    &:hover {
      transform: scale(115%, 115%);
    }
  }

  @media (min-width: 500px) {
    p {
      font-size: 0.85rem;
      line-height: 1.3rem;
    }

    button svg {
      height: 1.3rem;
      width: 1.3rem;
    }
  }
`;
