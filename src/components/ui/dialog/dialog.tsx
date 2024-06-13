import { Button } from '@/components/ui/button'
import { Modal, ModalProps } from '@/components/ui/modal/modal'

type DialogType = ModalProps
const Dialog = ({ children, ...rest }: DialogType) => {
  return (
    <Modal {...rest}>
      {children}
      <div className={''}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button variant={'primary'}>Add New Pack</Button>
      </div>
    </Modal>
  )
}

export default Dialog
