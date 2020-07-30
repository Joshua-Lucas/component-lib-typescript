import React from 'react'
import styled from 'styled-components'
import screenSize from '../../Utiles/ContainerSize'

// STYLE_COMPONETS
export const Label = styled.label`
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primaryTextColor};
  text-transform: capitalize;
`
const TextArea = styled.textarea`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.lightNeutralColor};

  &:hover {
    border: 2px solid ${(props) => props.theme.darkNeutralColor};
  }

  &:focus {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 2px solid ${(props) => props.theme.lightNeutralColor};
    box-shadow: white 0 0 0 0.2rem,
      ${(props) => props.theme.primaryColor} 0 0 0 0.4rem;
  }

  @media ${screenSize.md} {
    padding: 0.5rem;
  }
`

interface ITextarea {
  label: string
  value: string
  event: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}

const Textarea: React.FC<ITextarea> = ({ label, value, event, required }) => {
  const id = `textarea-${label.replace(' ', '').toLowerCase()}`
  return (
    <React.Fragment>
      <Label htmlFor={id}>
        {label}
        <TextArea
          name={label}
          id={id}
          value={label}
          placeholder={`Enter ${label}`}
          onChange={event}
        />
      </Label>
    </React.Fragment>
  )
}

export default Textarea
