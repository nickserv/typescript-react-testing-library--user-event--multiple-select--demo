import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

ReactDOM.render(
  <Hello name='react' onChange={name => console.log(name)}/>,
  document.body
)
