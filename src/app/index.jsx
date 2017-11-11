import React from 'react'
import ReactDOM from 'react-dom'

const createReactClass = require('create-react-class')
require('../css/index.sass')


// lets create a component the react way
const TodoComponent = createReactClass({
  render: function () {
    return (
      <div>
        <h1>Test 1:</h1>
        <p>{this.props.mssg}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <TodoComponent mssg='The mssg property is visible.' />, document.getElementById('todo-wrapper')
)
