import { describe, expect, it } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { TodoList } from '../../components/TodoList'

describe('Todo List', () => {
  it('should render the list title', () => {
    const { getByText } = render(<TodoList />)

    expect(getByText('Lista de Afazeres')).toBeTruthy()
  })

  it('should add a new Item when clicking add to list button', () => {
    const { getByTestId, getByText } = render(<TodoList />)

    const button = getByTestId('add-item-button')

    fireEvent.click(button)

    expect(getByText('item 1')).toBeTruthy()
  })
})
