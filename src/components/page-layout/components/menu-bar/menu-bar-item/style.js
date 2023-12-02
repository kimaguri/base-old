import styled from '@emotion/styled'
import { Box, Tooltip } from '@chakra-ui/react'

export const MenuBarItemWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ isActive }) =>
        isActive ? '1px solid rgba(48, 209, 219, 0.2)' : '1px solid white'};
    border-radius: 5px;
    background-color: ${({ isActive }) => (isActive ? 'rgba(48, 209, 219, 0.2)' : 'white')};
    padding: 25px;
    width: 60px;
    height: 60px;
    margin-bottom: 10px;

    #icon {
        color: ${({ isActive }) => (isActive ? 'rgba(48, 209, 219, 1)' : 'gray')};
    }

    &:hover {
        background-color: rgba(48, 209, 219, 0.2);
        border: 1px solid rgba(48, 209, 219, 0.2);

        #icon {
            color: rgba(48, 209, 219, 1);
        }
    }
`

export const TooltipStyled = styled(Tooltip)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    min-height: 45px;
    min-width: 130px;
    border-radius: 5px;
    background-color: rgba(48, 209, 219, 1);
    border-color: rgba(48, 209, 219, 1);
`
