import styled from 'styled-components'
import screenSize from '../../Utiles/ContainerSize'

const FormDiv = styled.div`
  padding: 1rem;

  @media ${screenSize.md} {
    max-width: 85%;
  }
  @media ${screenSize.lg} {
    max-width: 35%;
  }
  @media ${screenSize.xl} {
    max-width: 20%;
  }
`

export default FormDiv
