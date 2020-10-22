import React from 'react'
import ReactDom from 'react-dom'

import './test.scss'
import greeter from './test.ts'
console.log('greeter', greeter)
ReactDom.render(
  <div>hello {greeter('webpack00')} !!</div>,
  document.getElementById('root')
)