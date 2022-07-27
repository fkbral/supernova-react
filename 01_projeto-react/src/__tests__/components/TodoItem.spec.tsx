import { describe, vi, beforeEach } from 'vitest'
import { TodoItemComponent, TodoItemProps } from '../../components/TodoItem'
import { v4 as uuid } from 'uuid'
import { fireEvent, render } from '@testing-library/react'

describe('Todo Item Component', () => {
  let props: TodoItemProps

  beforeEach(() => {
    props = {
      item: {
        name: 'item de teste',
        id: uuid(),
      },
      // handleRemoveItem: jest.fn()
      // handleRemoveItem: vi.fn(),
      handleRemoveItem: vi.fn(event => {
        const target: HTMLButtonElement = event.target
        target?.parentElement?.parentElement?.remove()
      }),
    }
  })

  it('It should be able to render an item name from item props', () => {
    const { queryByText } = render(<TodoItemComponent {...props} />)

    expect(queryByText('item de teste')).toBeTruthy()
  })

  it('It should be able to find and click remove button', () => {
    const { getByTestId } = render(<TodoItemComponent {...props} />)

    const removeButton = getByTestId('remove-item-button')
    fireEvent.click(removeButton)

    expect(props.handleRemoveItem).toBeCalled()
    expect(props.handleRemoveItem).toBeCalledTimes(1)
  })

  it('It should be able to remove an Todo Item Component', () => {
    const { queryByText, getByTestId } = render(
      <TodoItemComponent {...props} />
    )

    expect(queryByText('item de teste')).toBeTruthy()

    const removeButton = getByTestId('remove-item-button')
    fireEvent.click(removeButton)

    expect(props.handleRemoveItem).toBeCalledTimes(1)
    expect(queryByText('item de teste')).not.toBeTruthy()
  })
})
