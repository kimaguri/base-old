import { Box } from '@chakra-ui/react'

const Plate = ({ children }) => {
    return (
        <Box borderRadius={16} bg="white" padding={5} width="100%">
            {children}
        </Box>
    )
}

export default Plate
