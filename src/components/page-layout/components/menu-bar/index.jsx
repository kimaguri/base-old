import { Avatar, IconButton, VStack } from '@chakra-ui/react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { AiOutlineUser } from 'react-icons/ai'

const MenuBar = ({ children }) => {
    return (
        <VStack display="flex" flexDirection="column" bg="white" justifyContent="space-between">
            <IconButton icon={<FaBarsStaggered />} aria-label="profile" mt={9} />
            <VStack minW={100} spacing={8}>
                {children}
            </VStack>
            <Avatar bg="gray.300" icon={<AiOutlineUser fontSize="1.5rem" />} mb={9} />
        </VStack>
    )
}

export default MenuBar
