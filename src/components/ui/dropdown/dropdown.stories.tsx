import Edit2Outline from '@/assets/icons/components/Edit2Outline'
import PlayCircleOutline from '@/assets/icons/components/PlayCircleOutline'
import TrashOutline from '@/assets/icons/components/TrashOutline'
import { Button } from '@/components/ui/button'
import {
  DropdownContent,
  DropdownItem,
  DropdownRoot,
  DropdownSeparator,
  DropdownTrigger,
} from '@/components/ui/dropdown/dropdown'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Meta, StoryObj } from '@storybook/react'

// import DropdownRoot from '@/dropdown'
const meta = {
  component: DropdownRoot,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {},
  render: () => {
    return (
      <DropdownMenu>
        <DropdownTrigger>
          <Button>he </Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>
            <PlayCircleOutline />
            Learn
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <Edit2Outline />
            Edit
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <TrashOutline />
            Delete
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    )
  },
}
