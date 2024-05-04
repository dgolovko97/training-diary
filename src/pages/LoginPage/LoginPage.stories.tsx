import type { Meta, StoryObj } from '@storybook/react'

import LoginPage from './LoginPage'
import React from 'react'

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
}

export default meta
type Story = StoryObj<typeof LoginPage>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <LoginPage />,
}
