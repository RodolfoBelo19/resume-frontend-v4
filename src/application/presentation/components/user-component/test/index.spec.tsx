import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { UserComponent } from '..'

describe('UserComponent', () => {
  test('should render and send the form', () => {
    const mockOnSubmit = jest.fn()
    const { getByLabelText, getByText } = render(<UserComponent onSubmit={mockOnSubmit} />)

    const emailInput = getByLabelText(/email/i) as HTMLInputElement
    const passwordInput = getByLabelText(/password/i) as HTMLInputElement
    const button = getByText(/login/i)

    console.log('Email input value:', emailInput.value)
    console.log('Password input value:', passwordInput.value)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    console.log('Email input value after typing:', emailInput.value)
    console.log('Password input value after typing:', passwordInput.value)

    expect(emailInput.value).toBe('test@example.com')
    expect(passwordInput.value).toBe('password123')

    fireEvent.click(button)
  })
})
