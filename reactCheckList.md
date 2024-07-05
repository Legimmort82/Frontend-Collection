# React topics checklist

## React fundamentals

- [D] use-cases of React
- [D] JavaScript basics for React
  - [D] immutability / data management without mutations
    - [D] updating properties of objects
    - [D] adding properties to objects
    - [D] adding elements to arrays (create)
    - [D] replacing elements in arrays (update)
    - [D] removing elements from arrays (delete)
  - [D] destructuring assignment with arrays and objects
  - [D] imports and exports: named and default
- [D] state
  - [D] using the _state hook_ (_useState_)
  - [D] minimal state and derived values
  - [D] input state
    - [D] connecting input values to state with _value_ and _onChange_
    - [D] handling various input types
    - [D] handling numeric inputs
  - [D] importance of immutability in React state
  - [D] using the state hook with TypeScript
- [D] JSX
  - [D] switching from JS to XML mode
  - [D] switching from XML to JS mode in content
  - [D] switching from XML to JS mode in element properties
  - [D] including strings and numbers
  - [D] setting boolean HTML properties (e.g. _disabled_)
  - [D] _className_
  - [D] the _style_ property in JSX
  - [D] whitespace in HTML vs whitespace in JSX
  - [D] escaping characters like _\<_, _\&_, _\>_
  - [D] comments
  - [D] if / else
    - [D] the operator `&&` in JS and JSX
  - [D] repeating elements
    - [D] the _key_ property
  - [D] adding event handlers in JSX
    - [D] accessing the event object
    - [D] `onClick={handleEvent}` (do) vs `onClick={handleEvent()}` (don't)
    - [D] `preventDefault`
    - [D] event types in TypeScript
  - [D] JSX fragments
  - [D] security and XSS attacks
    - [D] `dangerouslySetInnerHtml`
  - [D] compilation of JSX
- [D] development environment
  - [D] formatter (e.g. _prettier_)
  - [D] linter (e.g. _eslint_)
  - [D] developing with node.js and npm
  - [D] initializing a React project (e.g. via _create-react-app_)
  - [D] development server
  - [D] production build and deployment
  - [D] _React Developer Tools_ browser plugin
  - [D] project file structure: common approaches
- [ ] TypeScript basics for React
  - [ ] TypeScript benefits: autocompletion and error reporting
  - [ ] type declarations for libraries
  - [ ] type inference
  - [D] declaring types of variables
  - [D] primitive types: _number_, _string_, _boolean_
  - [D] array types
  - [D] object types
    - [ ] optional properties
  - [D] any
  - [ ] type aliases and interfaces basics
    - [ ] exporting and importing type aliases and interfaces
  - [ ] function signatures and function types
    - [ ] _void_
  - [ ] type assertions
  - [ ] using (pre-existing) generics
  - [ ] union types
- [D] components
  - [D] overview: function components and class components
  - [D] defining components as functions
  - [D] sharing data between components
  - [D] overview of existing component libraries
  - [D] props in custom components
  - [D] events in custom components
  - [D] passing content to components
  - [D] wrapping existing elements in components (e.g. `button` -> `StyledButton`)
- [D] hooks
  - [D] what are hooks?
  - [D] rules of hooks
  - [D] overview of built-in hooks and hooks from libraries
  - [D] creating custom hooks

## React libraries and tools

- [D] React ecosystem and libraries for different purposes (overview)
  - [ ] component libraries
  - [ ] API queries
  - [ ] routing
  - [ ] styling tools
  - [ ] form handling
  - [ ] state management
- [D] querying APIs
  - [D] network requests in JavaScript (_fetch_, _async_/_await_)
  - [D] API query libraries for React: e.g. _react-query_
  - [D] overview: _useEffect_
- [D] routing basics
  - [D] client-side routing
  - [D] _react-router_ library
    - [D] defining routes
    - [D] using links
    - [D] nested routes
    - [D] route parameters
    - [D] navigation from JavaScript
    - [D] active link style
- [ ] styling tools
  - [ ] tools for external stylesheets
    - [D] _classnames_ package
    - [D] CSS modules
    - [D] SCSS
  - [ ] CSS-in-JS
    - [D] inline styles
    - [ ] "styled components"
  - [ ] animations
    - [ ] animating appearance / disapperance of elements
- [D] forms
  - [D] form validation strategies
  - [D] libraries for forms: _react-hook-form_, _formik_
- [ ] state management overview
  - [ ] libraries: _zustand_, _redux_, _mobX_, ...

## Intermediate React

- [ ] state hook in detail
  - [ ] state transformer functions, outdated state
  - [ ] state initialization function
- [N] class components
  - [ ] defining components as classes
  - [ ] props in class components
  - [ ] state in class components
  - [ ] potential problems with _this_
- [ ] side effects
  - [ ] purposes of side effects
  - [ ] side effects in class components
  - [ ] side effects in function components
  - [ ] cleaning up side effects
  - [ ] "strict mode" and double invocation of side effects
- [ ] context
  - [ ] "pure providers" and "stateful providers"
  - [ ] stateful context with _constate_
  - [ ] context with vanilla React
- [ ] refs
  - [ ] refs for storing objects that don't influence the rendering
  - [ ] using refs for avoiding outdated state
  - [ ] the _ref_ property for accessing DOM elements
  - [ ] the _ref_ property in custom components

## Performance optimization

- [ ] React devtools and performance
- [ ] memoization
- [ ] memoization of expensive calculations
- [ ] skipping unneeded rerenders
- [ ] virtual DOM
- [ ] lazy-loading components
- [ ] reducing bundle size

## Testing

- [ ] Testing in JavaScript
  - [ ] assertions
  - [ ] test runners: e.g. _Jest_, _node:test_
  - [ ] mocking in JavaScript, mocking network responses
  - [ ] end-to-end testing libraries: e.g. _cypress_, _playwright_
- [ ] Testing in React: _react-testing-library_

## State management: intermediate

- [ ] concept: actions
- [ ] concept: reducers
- [ ] reducer hook
- [ ] overview: Redux
- [ ] immutability helper libraries (_immer.js_, _immutable.js_)

## Advanced concepts and patterns

- [ ] portals
- [ ] error boundaries
- [ ] higher-order components
- [ ] render props

## Other topics

- [ ] user authentication
- [ ] internationalization
- [ ] pre-rendering and next.js
- [ ] Redux in depth
- [ ] React and GraphQL / Apollo
- [ ] React Native
- [ ] PWAs
