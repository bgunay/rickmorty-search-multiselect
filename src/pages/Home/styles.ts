import styled, { css } from "styled-components";

export const Container = styled.main`
  grid-area: content;
  flex: 1;

  padding: 0 1rem;
  width: 100%;
  max-width: var(--screen-content);
  min-height: calc(100vh - 16rem);
  margin: 2.5rem auto;

  .pagination-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    gap: 0.5rem;

    list-style: none;

    li {
      border: 1px solid var(--gray-light);
      background: var(--white);
      border-radius: 5px;
      cursor: pointer;

      transition: ease 0.2s;

      a {
        display: block;
        padding: 0.8rem 1rem;
      }

      &:not(.disabled):not(.selected):hover {
        border-color: var(--red);
        background: var(--red-light);
      }

      &.selected {
        background: var(--red);
        border-color: var(--red);
        color: var(--white);

        &:hover {
          filter: brightness(0.8);
        }
      }

      &.disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }

  @media (min-width: 500px) {
    min-height: calc(100vh - 12rem);
  }
`;

export const BackToTop = styled.p`
  text-align: center;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    color: var(--heading);
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  form {
    width: 100%;
    max-width: 30rem;
    height: 5rem;
  }

  > span {
    color: var(--gray);
    opacity: 0.7;
    font-weight: var(--regular);
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

type SearchInputProps = {
  isFilled: boolean;
};

export const SearchInput = styled.label<SearchInputProps>`
  display: flex;

  height: 100%;
  width: 100%;

  padding: 0.8rem 1rem;
  border-radius: 0.5rem;

  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:hover svg {
    color: var(--red);
    opacity: 1;
  }

  > svg {
    margin: auto 0;
    margin-right: 0.5rem;
    color: var(--gray);
    opacity: 0.5;
    height: 1.25rem;
    width: 1.25rem;

    transition: ease 0.2s;
  }

  input {
    flex: 1;
    padding: 0 0.3rem;
    outline: none;
    border: 0;
    background: transparent;
    color: var(--black);
    font-weight: var(--semi-bold);

    &::placeholder {
      color: var(--gray);
      opacity: 0.5;
    }
  }

  button {
    width: 9.5rem;
    font-weight: var(--semi-bold);
    border: 0;
    border-radius: 0.5rem;

    background: var(--red);
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: ease 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        color: var(--red);
        opacity: 1;
      }
    `}
`;

export const SearchResults = styled.div`
  margin-top: 3rem;

  display: list-item;
  scroll-behavior: smooth;
  height: fit-content;
  overflow-x: scroll;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1240px) {
    grid-template-columns: repeat(4, calc((1120px / 4) - 1.5rem));
  }
`;
