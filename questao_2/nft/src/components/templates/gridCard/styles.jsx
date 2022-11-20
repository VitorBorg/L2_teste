import styled from "styled-components";

export const Content = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 5rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    scale: 50%;
  }

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    scale: 60%;
  }


  @media (max-width: ${(props) => props.theme.screen.giant}) {
    scale: 70%;
  }

  @media (max-width: ${(props) => props.theme.screen.giant}) {
    scale: 80%;
  }
`;

export const Grid = styled.ul`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  list-style: none;
  position: relative;
  gap: 2rem;
`;

export const ButtonHorizontal = styled.button`
  position: absolute;
  right: 2rem;
  height: 7rem;
  width: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.headline6};
  color: ${(props) => props.theme.colors.letter};
  filter: blur(.4px);

  cursor: pointer;
  border: none;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.dark};
  opacity: .8;

  @media (min-width: ${(props) => props.theme.screen.giant}) {
    display: none;
  }
`;

