import { Modal, ModalContent, ModalTrigger } from '@/components/ui/dialog/modal'
import { DropdownRoot } from '@/components/ui/dropdown/dropdown'
import * as Dialog from '@radix-ui/react-dialog'
import { Meta, StoryObj } from '@storybook/react'
vj
import s from './modal.module.scss'
const meta = {
  component: DropdownRoot,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof DropdownRoot>

export default meta
type Story = StoryObj<typeof meta>

export const DefaltValue: Story = {
  render: () => {
    return (
      <Modal open>
        <Dialog.Trigger asChild>
          <button>Trigger</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={s.overa} />
          <ModalContent className={s.content}>Content</ModalContent>
        </Dialog.Portal>
      </Modal>
    )
  },
}
