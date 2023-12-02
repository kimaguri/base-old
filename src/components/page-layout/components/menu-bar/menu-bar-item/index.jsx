import { Box, Icon } from '@chakra-ui/react'

import { MenuBarItemWrapper, TooltipStyled } from './style.js'

const MenuBarItem = ({ id, title, icon, onClick, activeMenuItem }) => {
    const isActive = id === activeMenuItem

    return (
        <Box cursor="pointer" onClick={onClick}>
            <TooltipStyled
                label={title}
                placement="right"
                bgColor={'rgba(48, 209, 219, 1)'}
                hasArrow
            >
                <MenuBarItemWrapper isActive={isActive}>
                    <Icon id="icon" as={icon} boxSize={9} color={'#595858'} />
                </MenuBarItemWrapper>
            </TooltipStyled>
        </Box>
    )
}

export default MenuBarItem
