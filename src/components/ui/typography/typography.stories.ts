import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/components/ui/typography/enum'

import { Typography } from './'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'H1. Text',
    variant: TypographyVariant.h1,
  },
}
export const H2: Story = {
  args: {
    children: 'H2. Text',
    variant: TypographyVariant.h2,
  },
}
export const H3: Story = {
  args: {
    children: 'H3. Text',
    variant: TypographyVariant.h3,
  },
}
export const H4: Story = {
  args: {
    children: 'H4. Text',
    variant: TypographyVariant.h4,
  },
}

export const Body1: Story = {
  args: {
    children: 'Body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    variant: TypographyVariant.body1,
  },
}

export const Body2: Story = {
  args: {
    children: 'Body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    variant: TypographyVariant.body1,
  },
}

export const Caption: Story = {
  args: {
    children: 'Caption. Any text.',
    variant: TypographyVariant.caption,
  },
}

export const Link1: Story = {
  args: {
    children: 'Link1. https://it-incubator.io/',
    variant: TypographyVariant.link1,
  },
}

export const Link2: Story = {
  args: {
    children: 'Link2. https://it-incubator.io/',
    variant: TypographyVariant.link2,
  },
}

export const Overline: Story = {
  args: {
    children: 'Overline. Some text',
    variant: TypographyVariant.overline,
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Subtitle1',
    variant: TypographyVariant.subtitle1,
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Subtitle2',
    variant: TypographyVariant.subtitle2,
  },
}
