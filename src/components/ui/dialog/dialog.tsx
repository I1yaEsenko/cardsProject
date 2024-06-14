import { Button } from '@/components/ui/button'
import { Modal, ModalProps } from '@/components/ui/modal/modal'

import s from './dialog.module.scss'
export type DialogType = {
  onCancel: () => void
  onSubmit: () => void
} & ModalProps
const Dialog = ({ children, onCancel, onSubmit, ...rest }: DialogType) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={s.button}>
        <Button onClick={onCancel} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={onSubmit} variant={'primary'}>
          Add New Pack
        </Button>
      </div>
    </Modal>
  )
}

export default Dialog
