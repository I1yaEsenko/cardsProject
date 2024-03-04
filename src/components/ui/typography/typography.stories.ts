import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'
import { TypographyVariant } from "@/components/ui/typography/enum";


const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: TypographyVariant.h1,
    children: 'H1. Text'
  }
}
export const H2: Story = {
  args: {
    variant: TypographyVariant.h2,
    children: 'H2. Text'
  }
}
export const H3: Story = {
  args: {
    variant: TypographyVariant.h3,
    children: 'H3. Text'
  }
}
export const H4: Story = {
  args: {
    variant: TypographyVariant.h4,
    children: 'H4. Text'
  }
}

export const Body1: Story = {
  args: {
    variant: TypographyVariant.body1,
    children: 'Body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Body2: Story = {
  args: {
    variant: TypographyVariant.body1,
    children: 'Body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Caption: Story = {
  args: {
    variant: TypographyVariant.caption,
    children: 'Caption. Any text.'
  }
}

export const Link1: Story = {
  args: {
    variant: TypographyVariant.link1,
    children: 'Link1. https://it-incubator.io/'
  }
}

export const Link2: Story = {
  args: {
    variant: TypographyVariant.link2,
    children: 'Link2. https://it-incubator.io/'
  }
}

export const Overline: Story = {
  args: {
    variant: TypographyVariant.overline,
    children: 'Overline. Some text'
  }
}

export const Subtitle1: Story = {
  args: {
    variant: TypographyVariant.subtitle1,
    children: 'Subtitle1'
  }
}

export const Subtitle2: Story = {
  args: {
    variant: TypographyVariant.subtitle2,
    children: 'Subtitle2'
  }
}
