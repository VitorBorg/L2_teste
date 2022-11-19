import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 30px;

  background: ${(props) => props.background};
  opacity: ${(props) => props.opacity};

  border: ${(props) => props.border};
  border-radius: 2px;

  outline: none;
  cursor: pointer;

  width: fit-content;

  padding: 1rem;

  height: 1.6rem;
  max-height: 100px;

  span {
    font-size: ${(props) => props.theme.fontSize.headline7};
    color: ${(props) => props.color};
    white-space:nowrap;
  }
`;