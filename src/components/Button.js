import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: var(--mainDark);
  border: 1px solid var(--mainDark);
  border-color: ${props =>
    props.cart ? "var(--mainDark)" : "var(--mainDark)"};
  color: ${props => (props.cart ? "var(--mainWhite)" : "var(--mainWhite)")};
  border-radius: 0;
  padding: 10px 35px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
