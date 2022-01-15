import React from 'react'

export const Line = (props) => {
  const {
    thickness,
    distance,
    style: borderStyle,
    color
  } = props;

  return (
    <div
      style={{
        borderBottomColor: color || 'rgba(200, 200, 200, 1)',
        borderBottomStyle: borderStyle || 'solid',
        borderBottomWidth: thickness || '1px',
        margin: `${distance || '20px'} 0px`,
      }}
    />
  )
}
