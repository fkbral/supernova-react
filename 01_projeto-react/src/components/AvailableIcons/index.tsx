import { useMemo, useReducer, useRef, useState } from 'react'
import * as icons from '../../utils/icons'
import * as S from './styles'

type UserSticker = {
  Icon: icons.Icon
  quantity: number
  // size: number
}

type UserStickerAction = {
  type: UserStickerActionTypes
  payload: icons.Icon
}

type UserStickerActionTypes = 'add' | 'subtract'

export const AvailableIcons = () => {
  const [Icons, setIcons] = useState<icons.Icon[] | null>()
  const iconToUpdate = useRef<{ icon: icons.Icon | null }>({
    icon: null,
  })

  // const [UserIcons, setUserIcons] = useState<icons.Icon[]>([])
  const [UserStickersState, stickersDispatch] = useReducer(stickersReducer, [])

  useMemo(() => {
    const updatedIcons: icons.Icon[] = []

    for (const iconKey in icons) {
      updatedIcons.push(icons[iconKey] as icons.Icon)
    }

    setIcons(updatedIcons)
  }, [icons, setIcons])

  function stickersReducer(
    state: UserSticker[],
    action: UserStickerAction
  ): UserSticker[] {
    console.log('oi')
    if (!iconToUpdate.current?.icon) {
      return state
    }

    switch (action.type) {
      case 'add': {
        const findSticker = state.find(
          sticker => sticker.Icon.name === iconToUpdate.current?.icon?.name
        )

        if (findSticker) {
          findSticker.quantity += 1

          const updatedState = state.map(sticker => {
            if (sticker.Icon.name === findSticker.Icon.name) {
              return findSticker
            }

            return sticker
          })

          return updatedState
        }

        return [
          ...state,
          {
            Icon: iconToUpdate.current.icon,
            quantity: 1,
          },
        ]
      }

      case 'subtract': {
        const isStickerInState = state.find(
          sticker => sticker.Icon.name === iconToUpdate.current?.icon?.name
        )

        if (isStickerInState && isStickerInState.quantity > 1) {
          isStickerInState.quantity -= 1

          return [...state, isStickerInState]
        }

        if (isStickerInState?.quantity === 1) {
          const filteredState = state.filter(
            sticker => sticker.Icon.name != iconToUpdate.current?.icon?.name
          )

          return filteredState
        }

        return state
      }

      default: {
        return state
      }
    }
  }

  function handleAddIconToUserFavorites(Icon: icons.Icon) {
    if (!iconToUpdate.current) {
      return
    }

    iconToUpdate.current.icon = Icon
    stickersDispatch({ type: 'add', payload: Icon })
    // setUserIcons(previousState => [...previousState, Icon])
  }

  return (
    <S.AvailableIconsContainerSection>
      <h1>Galeria de Adesivos</h1>

      <main>
        <S.AvailableIconsUL>
          {Icons?.map(Icon => (
            <li key={Icon.name}>
              <button onClick={() => handleAddIconToUserFavorites(Icon)}>
                <Icon />
              </button>
            </li>
          ))}
        </S.AvailableIconsUL>

        <section>
          <h2>Meus Adesivos</h2>
          <S.AvailableIconsUL>
            {UserStickersState?.map(({ Icon, quantity }) => (
              <li key={Icon.name}>
                <Icon />
                {/* <span>{quantity}</span> */}
              </li>
            ))}
          </S.AvailableIconsUL>
        </section>
      </main>
    </S.AvailableIconsContainerSection>
  )
}
