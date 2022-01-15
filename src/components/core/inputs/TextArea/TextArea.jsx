import React from 'react'
import styles from './TextArea.module.scss'

export const TextArea = (props) => {
  const {
    label,
    id,
    onChange,
    value,
    size,
    error,
    onKeyDown,
    rows
  } = props;

  const validSizes = ['small', 'medium', 'large'];

  const finalSizeClassName = validSizes.includes(size)
    ? `textarea--size-${size}`
    : `textarea--size-medium`

  return (
    <label
      data-testid='text-label'
      className={styles.label}
      htmlFor={id}
    >
      {label}
      <textarea
        data-testid='text-textarea'
        className={`
          ${styles.textarea}
          ${styles[finalSizeClassName]}
        `}
        id={id}
        rows={rows || 10}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <p className={styles.error}>{error}</p>
    </label>
  )
}
