import { useEffect } from 'react'
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FormApplet } from '../../form/components/index.jsx'
import Tabs from '../../tabs/index.jsx'

export const DrilldownModal = ({ recordData, drilldownMeta, isOpen, onClose, onSubmit }) => {
    const {
        control,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const { titleField, type, meta } = drilldownMeta || {}

    const handleSubmitFormData = (data) => {
        onSubmit(data)
        reset()
        onClose()
    }

    useEffect(() => {
        reset(recordData)
    }, [recordData])

    const titleText = titleField ? recordData[titleField] : 'Детальная информация'

    const getContent = () => {
        switch (type) {
            case 'tabs':
                return <Tabs meta={meta} />
            case 'form':
                return (
                    <FormApplet meta={meta} control={control} setValue={setValue} errors={errors} />
                )
            default:
                return null
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mb={25}>{titleText}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>{getContent()}</ModalBody>
                    <ModalFooter gap={5}>
                        {/*<Button type="submit" colorScheme="teal">
                            Закрыть
                        </Button>
                        <Button mr={3} onClick={onClose} variant="outline" colorScheme="teal">
                            Отмена
                        </Button>*/}
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}
