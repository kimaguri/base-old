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
import { useAuth } from '../../../../components/supabase-auth-provider/index.jsx'

export const AddTimesheetRecordModal = ({ isOpen, onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const { user } = useAuth()
    console.log('USER', user)

    const handleSubmitFormData = (data) => {
        onSubmit(data)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mb={25}>Новый табель</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <ModalBody>
                        <FormControl mb={5} isRequired>
                            <FormLabel htmlFor="project_id">Project ID</FormLabel>
                            <SelectInput name="project_id" size="lg" register={register} />
                            {errors.project_id && <span>This field is required</span>}
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="hours_amount">Hours Amount</FormLabel>
                            <Input
                                id="hours_amount"
                                size="lg"
                                {...register('hours_amount', { required: true })}
                            />
                            {errors.hours_amount && <span>This field is required</span>}
                        </FormControl>
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
