import { Button } from '@/components/ui/button'
import { Modal, ModalProps } from '@/components/ui/modal/modal'

import s from './dialog.module.scss'
export type DialogType = {
  cancelName: string
  onCancel: () => void
  onSubmit: () => void
  submitName: string
} & ModalProps
const Dialog = ({ cancelName, children, onCancel, onSubmit, submitName, ...rest }: DialogType) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={s.button}>
        <Button onClick={onCancel} variant={'secondary'}>
          {cancelName}
        </Button>
        <Button onClick={onSubmit} variant={'primary'}>
          {submitName}
        </Button>
      </div>
    </Modal>
  )
}

export default Dialog
