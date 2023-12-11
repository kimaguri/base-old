import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAddressBook, FaBitcoin, FaBrush } from 'react-icons/fa6'

import { PageLayoutWrapper } from './style.js'
import MenuBar from './components/menu-bar'
import MenuBarItem from './components/menu-bar/menu-bar-item'
import { Box, Flex } from '@chakra-ui/react'

const menuMeta = [
    {
        key: 'projects',
        title: 'Проекты',
        icon: FaAddressBook,
        route: '/projects'
    },
    {
        key: 'tablo',
        title: 'Табель',
        icon: FaBrush,
        route: '/tablo'
    },
    {
        key: 'settings',
        title: 'Настройки',
        icon: FaBitcoin,
        route: '/settings'
    }
]

export const PageLayout = ({ children }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(menuMeta[0].key)
    const navigate = useNavigate()

    const handleClick = (item) => () => {
        setActiveMenuItem(item.key)
        navigate(item.route)
    }

    return (
        <PageLayoutWrapper bg={'#f5f5f7'} height="100vh" width="100vw" direction="row" spacing={5}>
            <Flex direction="row" width="100%" height="100%">
                <MenuBar>
                    {menuMeta.map((item) => (
                        <MenuBarItem
                            key={item.key}
                            id={item.key}
                            title={item.title}
                            icon={item.icon}
                            activeMenuItem={activeMenuItem}
                            onClick={handleClick(item)}
                        />
                    ))}
                </MenuBar>
                <Box width="100%" padding={35}>
                    {children}
                </Box>
            </Flex>
        </PageLayoutWrapper>
    )
}
