import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { context } from './contexts'

addParameters({
  background: [{ name: 'Default Theme', value: '#ffffff', default: true }]
})
addDecorator(withContexts(context))
