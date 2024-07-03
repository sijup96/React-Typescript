# React + TypeScript + Vite
                                # Learning React..

# React create app

npx create-react-app my-app
cd my-app
npm start

# Install React

--> npm install react

--> npm i react-dom

# Installing dependencies

--> npm i -D parcel ( -D means dev dependencies ) other is normal dependencies.

# Run Parcel for developer (Parcel is a bundler)

--> npx parcel index.html ( npx means executing the package.. to Iginte our app) --https

. File watching algorithm - written in c++
. Caching - Faster Builds
. Local server
. HMR (Hot Module Replacement)
. Store caching for Faster Builds
. Image optimization
. Minification
. Compress
. Bundling (All file into one)
. Consistent Hashing
. Differential Bundling - support older versions
. HTTPS host also
. Tree Shaking algorithm- remove unused code
. Code spliting
. Diagnostic
. Error Handling
. Different dev and prod bundles

# Parcel for Production

--> npx parcel build index.html (When using this, remove main:App.js from package.json)

# make sure gitignore

/node_modules

# JSX (JavaScript XML (xml like syntax))

--> (JSX transpiled before it reaches the JS) - PARCEL - Babel

- Camelcase
- Writing multiple line inside the () otherwise write in one line.

# React have 2 phases [1. Render phase, 2. Commit Phase ]

=> Render phase - No side effects.
=> Commit phase - Run side effects.

# React Component (2 types)

--> Class Based Component - OLD way of writing code
. Constructor(props) is used to accessd props and make into super(props).
. using 'this' keyword is used to access the props inside the class.
. Hooks are initialize inside the constructor()
eg: this.state={
count=0,
}
=> Never update state variable directly.
. Update state variable
eg: this.setState({
count:this.state.count+1,
})
-> componentDidMount()-> run last -> for make API calls (Like useEffect() in the functional component)

=> Life Cycle
=> Mounting:{
-> First parent constructor()
-> Parent render()
-> Child1 constructor()
-> Child1 render()
-> Child2 constructor()
-> Child2 render()
< DOM UPDATING >
-> child1 componentDidMount()
-> child2 componentDidMount()
-> Parent componentDidMount()
}

=> componentDidUpdate() - run after componentDidMount()
-> DOM is update

=> componentWillUnmount() - remove from DOM

--> Functional Component - NEW way of writing code
. Component name starts with capital letter.
. Function that return reactElement

--> Component composition - A component inside another component.

# props

--> Arguments to a function (to Load dynamic data)
.passing props to the component.

# key

--> must use unique ID ,(else use 'index' but is not recomented by react)

# Hooks (Normal JS utility code)

--> useState() - to create local state variables in react.
. import {useState} from 'react';
. Scope of the state variable with inthe Component
. When ever a state variable updates, react triggers a reconiliation cycle(re-renders the component)
. Don't create inside the conditions,loops,inner Functions.

--> useEffect()
. 2 parameter(1.callBack(), 2. dependency array).
=> return()=>{} is used to unmount the useEffect() (sideEffect)
=> If no dependency array => useEffect is called on every render .
=> If dependency array is empty = [] => useEffect is called on initial render (just once).
=> If dependency array have [element] => useEffect is called everytime the 'element' is updated.

--> useRouterError()

--> useParams() - This is like params in node.js

--> useRef()

# Virtual DOM

--> Is a representation of Actual DOM.
. JS Object.

# Diff algorithm

--> Find the difference b/w 2 virtual DOM.(old object & new new object) and then update the Actual DOM.
. It will done at every state changes.

# React uses Reconciliation algorithm (React fiber) [React 16].

--> React is fast because of efficient DOM manipulation.
. Virtual DOM (diff algorithm)

# more

--> Config driven UI (website is driven by config data)- industrial use.

# API calls (2 ways of approach)

--> 1. Load -> API -> Render.
--> 2. Load -> Render -> API -> Re-Render. (Better user experience)

# React Router

--> npm i react-dom
. import {createBrowserRouter} from 'react-router-dom'; is recomented.
. {RouterProvider} => To provide children router
. {Outlet} => To access child routes

=> Navigate to another page without reloading the entire page. (Don't use <a>) => use {Link}

-->import {Link} from 'react-router-dom'

# 2 types Routing in web apps

=> Client side Routing - No network call , just load the component
=> Server side Routing - Network call , reload whole page

# Optimize the code

=> Single responsibility principle
-> Make your code Testable,reUsable and Maintainable
-> Make it modular

=> Custom Hooks()

=> Chunking / Code Spliting / Dynamic Bundling / Lazy loading / on Demand loading
-> import React,{lazy, Suspense} from 'react'
eg: const Grocery= lazy(()=>import('path of Component'))
. Give component inside the <Suspense fallback={}> <Grocery/></Suspense>

# styles

=> Styled component
=> SCSS, SASS
=> Material UI
=> Bootstrap
=> Chakra UI
=> Ant Design
=> Tailwind

# Higher order component

# Props Drilling (passing data from root to leaf through all nodes) [it is the problem] => use React context

# React context

=> createContext()
=> useContext()

# Redux Toolkit ( its work on the data layer) [Not mandatory] - Managing state

-> Install npm i @reduxjs/toolkit and react-redux

- Build out store ( inside the utils folder )
- Connect our store to our app
- Slice
- Dispatch (action)
- Selector

=> Used in big applicatiions.
-> A predicatable state container for apps.
-> Application is easier to debug

=> Store data inside the redux in the form of different slices

=> Write Data
-->> Click --> [useDispatch() Action] --> [calls an function() [Reducer] ] --> modify the slice in redux store.

=> Read Data
-->> useSelector() [ Subscribing to the store ].

=> Make sure the right hand side of the selector (only that we want to be subscribe slice not the whole store)

=> Immer (library) - to make mutate state variables in the reducers

# RTK query

-> Earlier we use midlewares and thunks now we use RTK queries

# Testing [ developer ] 3 types

=> Unit testing
-> Test in isolation [test only one component]

=> Integration testing
-> Integration of components test

=> End to End (E2E) testing
-> Start from the user enter to the application to the user leave the appllication
. Cypress
. Selenium

# Setting up Testing in our app

-> Install React Testing Library
-> Install jest
-> Install Babel dependencies ( on jest website )
-> Configure Babel
---> babel.config.js
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

-> Configure Parcel Config to disable default babel transpilation ( on parcel website javascript - babel)
---> .parcelrc
{
"extends": "@parcel/config-default",
"transformers": {
"\*.{js,mjs,jsx,cjs,ts,tsx}": [
"@parcel/transformer-js",
"@parcel/transformer-react-refresh-wrap"
]
}
}

-> Jest configuration
---> npx jest --init

-> Install jsdom library ( react testing library - setup  - jest 28) 
---> npm install --save-dev jest-environment-jsdom

# Librarys for testing

-> Jest - Javascript Testing Framework with a focus on simpolicity
-> React Testing Library

# To run test [ npm run test ] 