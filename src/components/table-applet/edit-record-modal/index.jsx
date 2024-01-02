import { useEffect } from 'react'
import {
    Button,
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

export const EditRecordModal = ({ recordData, meta, isOpen, onClose, onSubmit }) => {
    const {
        control,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const { title, fields } = meta || {}

    useEffect(() => {
        if (recordData) {
            reset(recordData[0])
        }
    }, [recordData])

    const handleSubmitFormData = (data) => {
        const dataWithoutJoins = Object.fromEntries(
            Object.entries(data).filter(([key]) => typeof data[key] !== 'object')
        )
        onSubmit(dataWithoutJoins)
        reset()
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mb={25}>{title || 'Редактирование записи'}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>
                        <FormApplet
                            meta={fields}
                            control={control}
                            setValue={setValue}
                            errors={errors}
                        />
                    </ModalBody>
                    <ModalFooter gap={5}>
                        <Button type="submit" colorScheme="teal">
                            Изменить
                        </Button>
                        <Button mr={3} onClick={onClose} variant="outline" colorScheme="teal">
                            Отмена
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}
