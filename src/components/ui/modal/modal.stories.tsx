import { useState } from 'react'

import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'
const meta = {
  component: Modal,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const DefaltValue: Story = {
  args: {
    children: 'Modal',
    onOpenChange: () => {},
    open: true,
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div>
          <button onClick={() => setOpen(true)}>ddkdk</button>
        </div>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          content
        </Modal>
      </>
    )
  },
}
