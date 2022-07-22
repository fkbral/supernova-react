import { forwardRef, InputHTMLAttributes, useId } from 'react'
import type { Icon } from '../../utils/icons'
import * as S from './styles'

type IconInputProps = {
  InputIcon?: Icon
  labelText?: string
}

const IconInputBase = (
  props: IconInputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  const { InputIcon, labelText, ...rest } = props
  const inputId = useId()

  return (
    <>
      {labelText && <label htmlFor={inputId}>{labelText}</label>}
      <S.IconInputContainerDiv>
        {InputIcon && <InputIcon />}
        <input ref={ref} id={inputId} type="text" {...rest} />
      </S.IconInputContainerDiv>
    </>
  )
}

export const IconInput = forwardRef(IconInputBase)
