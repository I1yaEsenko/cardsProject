import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/tabs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Tabs,
  parameters: {
    background: 'black',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>
// @ts-ignore
export const UserComponent: Story = {
  render: () => {
    return (
      <Tabs>
        <TabsList>
          <TabsTrigger value={'my'}>My decks</TabsTrigger>
          <TabsTrigger disabled value={'other'}>
            other
          </TabsTrigger>
          <TabsTrigger value={'All'}>All decks</TabsTrigger>
        </TabsList>
      </Tabs>
    )
  },
}
