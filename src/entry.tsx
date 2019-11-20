import MultiSelect from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

ReactDOM.render(
  <MultiSelect onSelect={values => console.log("Selected values:", values)}/>,
  document.body
)
