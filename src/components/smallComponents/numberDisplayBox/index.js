import React from 'react'

export default function NumberDisplayBox(props) {
  return (
    <div>
        <h3>{props.header}</h3>
        <p>{props.number}</p>
    </div>
  )
}
