# @jludev/component-lib-typescript

> A React Component Library With TypeScript

[![NPM](https://img.shields.io/npm/v/@jludev/component-lib-typescript.svg)](https://www.npmjs.com/package/@jludev/component-lib-typescript) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jludev/component-lib-typescript
```

## Documentation

This library is created using styled-components so you will need to pull in styled-components as a dependency to use this library.

Review Styled-Components Docs(https://styled-components.com/)

How to pull in off of npm

```bash
npm install --save styled-components
```

Example of how simple it is to implement a component from this library.

```jsx
import React, { Component } from 'react'
import MyComponent from '@jludev/component-lib-typescript'

const Example => () {

    return(
      <div>
        <MyComponent />
      <div>
    );

}
```

### Avaiable Components

Here is a list of avaible componets included in the package.

#### Basic Elements

**Form Elements**

Buttons:

- PrimaryButton
- SecondaryButton
- TiriaryButton

Inputs:

- Input (Props it takes are {label, type, value, event})

Select:

- Dropdown //Props{label, options[], event(This goes to an onChange & onBlur event)}

Textarea:

- Textarea //Props{label, value, required?(optional boolean), event(This goes to an onChange)}

#### Utility Styles

I have used these utility styles to help with quickly building style components. Here they are if you would like to use them.

example of using utility styles:

```tsx
import UtilityStyles from '@jludev/component-lib-typescript'

const FormContainer = styled(FormDiv)`
  background-color: '#fff';
  padding: 1.25rem;
  border-radius: ${UtilityStyles.borderRadius.md};
  box-shadow: ${UtilityStyles.boxShadow.xxl};

  @media ${screenSize.md} {
    padding: 0.5rem;
  }
`
```

**Border Radius**

UtilityStyles.borderRadius.

Key: Value:
none: '0',

    sm: '0.125rem',

    base: '0.25rem',

    md: '0.375rem',

    lg: '0.5rem',

    full: '9999px'

**Box Shadow**

UtilityStyles.boxShadow.

      Key:   Value:
      sm: ' 0 1px 2px 0 rgba(0, 0, 0, 0.05)',

      base: ' 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',

      md: ' 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

      lg:' 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',

      xl:'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

      xxl: ' 0 25px 50px -12px rgba(0, 0, 0, 0.25)',

      outline: ' 0 0 0 3px rgba(66, 153, 225, 0.5)'

**Continer Size**

UtilityStyles.screenSize.

    Key:  Value:
     sm: '(min-width: 640px)',

     md: '(min-width: 768px)',

     lg: '(min-width: 1024px)',

     xl: '(min-width: 1280px)'

### Customize Styles

This library is created using styled-components so the best way to customize each componet to fit your project needs is to pass a theme object to your theme provider.

Example of how to pass your custom theme to your whole app.

```tsx
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import MyComponent from '@jludev/component-lib-typescript'

// Your Theme Object
const theme = {
  primaryColor: red;
}

const Example => () {

    return(
      <ThemeProvider theme={theme}>
        <div>
          <MyComponent />
        <div>
      </ThemeProvider>
    );

}
```

#### ThemeFile Keys

For now these are the only aspects of components that can be customized.

```tsx
  const theme = {
  primaryColor: //color
  secondaryColor: //color
  tiriaryColor: //color

  }
```

## License

MIT © [Joshua-Lucas](https://github.com/Joshua-Lucas)
