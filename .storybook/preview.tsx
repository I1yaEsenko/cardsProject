import type { Preview } from '@storybook/react'

import '../src/styles/index.scss'
import { MemoryRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
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
  Story => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  },
]

export default preview
