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
