import type { Preview } from '@storybook/react'

import '../src/styles/index.scss'
import { MemoryRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}
export const decorators = [
  (Story: any) => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  },
]

export default preview
