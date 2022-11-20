import styled from "styled-components";

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 10rem 20% 0 20%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 15rem;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    gap: 5rem;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 30%;

  gap: 2rem;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    max-width: 100%;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    max-width: 100%;
  }
`;

export const SpanSub = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: 30px;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const figure = styled.figure`
  img{
    max-width: 80%;
  }
`;
