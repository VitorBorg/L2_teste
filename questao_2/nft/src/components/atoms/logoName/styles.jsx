import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 10px;

  h4 {
    font-size: ${(props) => props.theme.fontSize.headline5};
  }
`;