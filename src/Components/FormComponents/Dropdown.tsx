import React from 'react'
import styled from 'styled-components'
import { Label } from './Input'
// import CheveronDown from '../Icons/chevron-down.svg'

// Styled-Components
const DropDownLabel = styled(Label)``

const SelectElement = styled.select`
  height: 2rem;
  margin-top: 0.25rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.lightNeutralColor};

  /* The Dropdown Icon */
  /* -webkit-appearance: none;
  -moz-appearance: none; */

  background-repeat: no-repeat;
  background-position-x: 100%;

  &:hover {
    border: 2px solid ${(props) => props.theme.lightNeutralColor};
  }
  &:focus {
    outline: none;
    box-shadow: white 0 0 0 0.2rem,
      ${(props) => props.theme.primaryColor} 0 0 0 0.4rem;
  }
`

const OptionElement = styled.option`
  color: ${(props) => props.theme.primaryTextColor};
`

// INTERFACES

interface IDropdownProps {
  label?: string
  name: string
  options: string[]
  value?: string
  event: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

// COMPONENTS
const Dropdown: React.FC<IDropdownProps> = ({
  label,
  name,
  options,
  event
}) => {
  const id = `dropdown-${name.replace(' ', '').toLowerCase()}`
  const selections = options.map((option) => (
    <OptionElement key={option} value={option}>
      {option}
    </OptionElement>
  ))

  return (
    <React.Fragment>
      <DropDownLabel htmlFor={id}>
        {label} {/* This is optional */}
        <SelectElement name={name} id={id} onChange={event} onBlur={event}>
          {selections}
        </SelectElement>
      </DropDownLabel>
    </React.Fragment>
  )
}
export default Dropdown
