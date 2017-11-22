import React from 'react'
import PropTypes from 'prop-types'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return(
    <li className="Todo__li">
      <span className="delete-item"><a onClick={handleRemove}>X</a></span>
      <input
        type="checkbox"
        className="Todo__input"
        checked={props.isComplete}
        onChange={handleToggle}
      />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}
