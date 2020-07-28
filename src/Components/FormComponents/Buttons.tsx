import styled from 'styled-components'

// StyledComponents
const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.primaryColor};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: white;
`

export default PrimaryButton
