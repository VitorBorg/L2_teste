import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20% 0 20%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8rem;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
      flex-direction: column;
  }
`;
