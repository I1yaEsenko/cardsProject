import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Dialog from './dialog'

const meta = {
  component: Dialog,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const First: Story = {
  args: {
    cancelName: 'erer',
    children: 'Modal',
    onOpenChange: () => {},
    open: true,
    submitName: 'sddw',
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div>
          <button onClick={() => setOpen(true)}>ddkdk</button>
        </div>
        <Dialog {...args} onOpenChange={setOpen} open={open}>
          some form
        </Dialog>
      </>
    )
  },
}
