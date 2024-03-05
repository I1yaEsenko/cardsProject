import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'
import { TypographyVariant } from '@/components/ui/typography/enum'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
  args: {
    children: <Typography variant={TypographyVariant.h2}>Card</Typography>,
  },
}

export const CardLikeASection: Story = {
  args: {
    as: 'section',
    children: <Typography variant={TypographyVariant.h2}>It's a section!</Typography>,
  },
}

export const CardLikeAnArticle: Story = {
  args: {
    as: 'article',
    children: <Typography variant={TypographyVariant.h2}>It's an article!</Typography>,
  },
}
