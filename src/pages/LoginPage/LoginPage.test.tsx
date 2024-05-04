import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from './LoginPage'

describe('Login Page', () => {
  it('render Login Page', () => {
    render(<LoginPage />)
    const login_page = screen.getByTestId('login-page')
    expect(login_page).toBeInTheDocument()
  })
})
