import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { SelectInput } from '../../../../components/form/components/select-input/index.jsx'
import { DictionaryInput } from '../../../../components/form/components/dictionary-input/index.jsx'

function MyModal({ isOpen, onClose, onSubmit }) {
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
                <ModalHeader>My Modal</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel htmlFor="organization_id">Организация</FormLabel>
                            <SelectInput source="organization" name="organization_id" size="lg" register={register} />
                            {errors.organization_id && <span>Поле обязательное</span>}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="name">Наименование</FormLabel>
                            <Input
                                id="name"
                                size="lg"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span>Поле обязательное</span>}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="year">Год</FormLabel>
                            <Input
                                id="year"
                                size="lg"
                                {...register('year', { required: true })}
                            />
                            {errors.year && <span>Поле обязательное</span>}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="status">Статус</FormLabel>
                            <DictionaryInput dictionaryName="fin_report_status" name="status" size="lg" register={register} />
                            {errors.status && <span>Поле обязательное</span>}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="comments">Комментарии</FormLabel>
                            <Input
                                id="comments"
                                size="lg"
                                {...register('comments')}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter gap={5}>
                        <Button type="submit">Submit</Button>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default MyModal
