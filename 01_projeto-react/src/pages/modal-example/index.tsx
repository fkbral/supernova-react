import { useRef } from 'react'
import { Button } from '../../components/Button'
import { Modal, ModalRef } from '../../components/Modal'

export const ModalExample = () => {
  const modalRef = useRef<ModalRef>(null)

  return (
    <>
      <h1>Modal de Teste</h1>

      <Button onClick={() => modalRef?.current?.openModal()}>
        Abrir Modal
      </Button>
      <Modal ref={modalRef} />
    </>
  )
}
