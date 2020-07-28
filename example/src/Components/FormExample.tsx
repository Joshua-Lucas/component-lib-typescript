import React, { useState } from 'react'
import {
  Input as FormInput,
  Buttons,
  FormDiv,
  Dropdown,
  UtilityStyles
} from '@jludev/component-lib-typescript'
import styled from 'styled-components'

/* This is an example of how you might use the elements of a form. 
    There is a generic form div but you could quickly just add your own styled-div
    if needed.
*/

// Styled-Components
const FormContainer = styled(FormDiv)`
  background-color: '#fff';
  padding: 1.25rem;
  border-radius: ${UtilityStyles.borderRadius.md};
  box-shadow: ${UtilityStyles.boxShadow.xxl};
`

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
// Component
const FormExample = () => {
  // HOOKS
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [ad, setAd] = useState('')

  const submittion = {
    name: nameInput,
    email: emailInput,
    password: passwordInput,
    how: ad
  }

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(submittion)
  }

  return (
    <FormContainer className='FormExample'>
      <FormElement onSubmit={submitHandle}>
        <FormInput
          label='name'
          type='text'
          value={nameInput}
          event={(e) => setNameInput(e.target.value)}
        />
        <FormInput
          label='email'
          type='email'
          value={emailInput}
          event={(e) => setEmailInput(e.target.value)}
        />
        <FormInput
          label='password'
          type='password'
          value={passwordInput}
          event={(e) => setPasswordInput(e.target.value)}
        />
        <Dropdown
          label='how did you hear of us?'
          options={['Test 1', 'Test2', 'Test 3']}
          event={(e) => setAd(e.target.value)}
        />
        <Buttons name='submit' type='submit'>
          Submit
        </Buttons>
      </FormElement>
    </FormContainer>
  )
}

export default FormExample
