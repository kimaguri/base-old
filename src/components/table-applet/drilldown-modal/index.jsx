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

export const DrilldownModal = ({ recordData, meta, isOpen, onClose, onSubmit }) => {
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
    }

    const handleCancel = () => {
        reset(recordData)
    }

    useEffect(() => {
        reset(recordData)
    }, [recordData])

    const titleText = meta.titleField
        ? recordData[meta.titleField]
        : 'Детальная информация'

    const getContent = () => {
        switch (meta.type) {
            case 'tabs':
                return <Tabs
                    meta={meta.meta}
                    //onSubmit={handleSubmit(handleSubmitFormData)}
                    handleSubmit={handleSubmit}
                    onCancel={handleCancel}
                    control={control}
                    setValue={setValue}
                    errors={errors}
                />
            case 'form':
                return <FormApplet
                    meta={meta.meta}
                    control={control}
                    setValue={setValue}
                    errors={errors}
                />
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
                    <ModalBody>
                        {getContent()}
                    </ModalBody>
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
