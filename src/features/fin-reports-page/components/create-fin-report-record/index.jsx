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
import { FormApplet } from '../../../../components/form/components/index.jsx'
import { finReportModalMeta } from './finReportModalMeta.js'

export const AddFinReportRecordModal = ({ isOpen, onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleSubmitFormData = (data) => {
        onSubmit(data)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Новый финансовый отчет</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>
                        <FormApplet
                            meta={finReportModalMeta}
                            register={register}
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

