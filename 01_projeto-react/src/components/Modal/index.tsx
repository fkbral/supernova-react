import {
  forwardRef,
  Ref,
  RefObject,
  useImperativeHandle,
  useState,
} from 'react'
import { CloseIcon } from '../../utils/icons'
import * as S from './styles'

export type ModalRef = {
  closeModal: () => void
  openModal: () => void
}

const ModalBase = (props: unknown, ref: Ref<ModalRef>) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        closeModal() {
          setOpen(false)
        },
        openModal() {
          setOpen(true)
        },
      }
    },
    []
  )

  const [open, setOpen] = useState(false)
  return (
    <>
      {open && (
        <>
          <S.ModalBackground
            onClick={() => (ref as RefObject<ModalRef>)?.current?.closeModal()}
          />
          <S.ModalContainerDiv>
            <header>
              <button
                onClick={() =>
                  (ref as RefObject<ModalRef>)?.current?.closeModal()
                }
              >
                <CloseIcon />
              </button>
            </header>

            <section>
              <h3>Mensagem da modal</h3>
            </section>
          </S.ModalContainerDiv>
        </>
      )}
    </>
  )
}

export const Modal = forwardRef(ModalBase)
