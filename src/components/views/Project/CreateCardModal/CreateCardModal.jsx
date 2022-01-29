import React from 'react'
import styles from './CreateCardModal.module.scss'
import { CreateCardForm } from '../../../forms'
import { Heading } from '../../../core'
import { Modal } from '../../../core/Modal'
import { useProjectContext } from '../../../context/ProjectProvider'

export const CreateCardModal = () => {
  const {
    isCreatingCard, setIsCreatingCard,
  } = useProjectContext();

  return (
    <Modal
      show={isCreatingCard}
      setShow={setIsCreatingCard}
    >
      <div className={styles.main}>
        <Heading>Create Card</Heading>
        <CreateCardForm />
      </div>
    </Modal>
  )
}