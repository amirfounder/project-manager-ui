import React from 'react'
import styles from './CreateCardModalBody.module.scss'
import { UpdateCardForm } from '../../../../forms'
import { Button, Heading } from '../../../../core'
import { Modal } from '../../../../core/Modal'

export const CreateCardModalBody = () => {
  return (
    <Modal>
      <div className={styles.main}>
        <Heading>Create Card</Heading>
        <UpdateCardForm />
        <Button
          label='Create Card'
        />
      </div>
    </Modal>
  )
}