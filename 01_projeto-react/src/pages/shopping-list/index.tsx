import { ShoppingItem } from '../../application/types/ShoppingList'
import { v4 as uuid } from 'uuid'
import { Button } from '../../components/Button'
import { useState } from 'react'
import * as S from './styles'

const ShoppingList = () => {
  // const objetoHash = new Map()
  // objetoHash.set('idade', 20)
  // objetoHash.set('nome', 'fulano')

  // console.log(objetoHash.get('nome'))
  // console.log(objetoHash)

  const amountTypeInPortuguese: Record<ShoppingItem['amountType'], string> = {
    kg: 'kg',
    L: 'L',
    dozen: 'dúzia(s)',
    unity: 'unidade(s)',
  }

  const selectOptions: { label: string; value: ShoppingItem['amountType'] }[] =
    [
      {
        label: 'kg',
        value: 'kg',
      },
      {
        label: 'L',
        value: 'L',
      },
      {
        label: 'dúzia(s)',
        value: 'dozen',
      },
      {
        label: 'unidade(s)',
        value: 'unity',
      },
    ]

  const initialShoppingList: ShoppingItem[] = [
    {
      name: 'Feijão',
      amount: 1,
      amountType: 'kg',
      inCart: true,
    },
    {
      name: 'Arroz',
      amount: 2,
      amountType: 'kg',
    },
    {
      name: 'Ovos',
      amount: 1,
      amountType: 'dozen',
    },
  ]

  const [shoppingList, setShoppingList] =
    useState<ShoppingItem[]>(initialShoppingList)

  // const shoppingList = initialShoppingList

  const [itemNameInput, setItemNameInput] = useState('')
  const [itemAmountInput, setItemAmountInput] = useState('1')
  const [itemAmountTypeInput, setItemAmountTypeInput] =
    useState<ShoppingItem['amountType']>('unity')

  function handleAddShoppingItemToList(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const newShoppingItem: ShoppingItem = {
      name: itemNameInput,
      amount: parseFloat(itemAmountInput),
      amountType: itemAmountTypeInput,
    }

    // errado: não está sinalizando ao react que devemos fazer re-render
    // shoppingList.push(newShoppingItem)

    setShoppingList(previousShoppingList => [
      ...previousShoppingList,
      newShoppingItem,
    ])

    // exemplo para manipulações mais complexas dentro do setState
    // setShoppingList(previousShoppingList => {
    //   const newShoppingList = [...previousShoppingList, newShoppingItem]
    //   console.log(newShoppingList)
    //   return newShoppingList
    // })

    setItemNameInput('')
  }

  return (
    <>
      <h1>Lista de Compras</h1>

      <form onSubmit={handleAddShoppingItemToList}>
        <label htmlFor="shopping-item-name">Nome</label>
        <input
          type="text"
          id="shopping-item-name"
          value={itemNameInput}
          onChange={e => setItemNameInput(e.target.value)}
        />

        <label htmlFor="shopping-item-amount">Quantidade</label>
        <input
          type="number"
          id="shopping-item-amount"
          value={itemAmountInput}
          onChange={e => setItemAmountInput(e.target.value)}
        />

        <label htmlFor="shopping-item-amount-type">Tipo de Quantidade</label>
        <select
          id="shopping-item-amount-type"
          value={itemAmountTypeInput}
          onChange={e =>
            setItemAmountTypeInput(e.target.value as ShoppingItem['amountType'])
          }
        >
          {/* <option>Selecione uma opção</option> */}
          {selectOptions.map(option => (
            <option key={uuid()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Button>adicionar</Button>
        <button className="btn">adicionar</button>
      </form>

      <ul>
        {shoppingList.map(item => (
          <S.ShoppingItemLI key={uuid()} inCart={item?.inCart}>
            <p>
              <span>{item.name} - </span>
              {item.amount && (
                <>
                  quantidade: <strong>{item.amount}</strong>{' '}
                  <span>{amountTypeInPortuguese[item.amountType]}</span>{' '}
                </>
              )}
            </p>
          </S.ShoppingItemLI>
        ))}
      </ul>
    </>
  )
}

export default ShoppingList
