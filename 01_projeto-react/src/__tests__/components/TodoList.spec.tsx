import { describe, expect, it } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { TodoList } from '../../components/TodoList'

describe('Todo List', () => {
  it('should render the list title', () => {
    const { getByText } = render(<TodoList />)

    expect(getByText('Lista de Afazeres')).toBeTruthy()
  })

  it('should be able to add a new Item when clicking add to list button', () => {
    const { getByTestId, getByText } = render(<TodoList />)

    const button = getByTestId('add-item-button')

    fireEvent.click(button)

    expect(getByText('item 1'))
  })

  it('should be able to add and remove a new Item', () => {
    const { getByTestId, getByText, queryByText } = render(<TodoList />)

    const addToListButton = getByTestId('add-item-button')
    fireEvent.click(addToListButton)
    expect(getByText('item 1')).toBeTruthy()

    const removeFromListButton = getByTestId('remove-item-button')
    fireEvent.click(removeFromListButton)

    expect(queryByText('item 1')).not.toBeTruthy()
  })
})
