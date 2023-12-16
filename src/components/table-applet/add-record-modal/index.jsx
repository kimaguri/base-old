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

export const AddRecordModal = ({ meta, isOpen, onClose, onSubmit }) => {
    const {
        control,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const handleSubmitFormData = (data) => {
        onSubmit(data)
        reset()
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mb={25}>{meta.title || 'Новая запись'}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>
                        <FormApplet
                            meta={meta.fields}
                            control={control}
                            setValue={setValue}
                            errors={errors}
                        />
                    </ModalBody>
                    <ModalFooter gap={5}>
                        <Button type="submit" colorScheme="teal">
                            Создать
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
