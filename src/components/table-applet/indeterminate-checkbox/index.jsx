import { Checkbox } from '@chakra-ui/react'

export const IndeterminateCheckbox = ({ isIndeterminate, ...rest }) => {
    return <Checkbox isIndeterminate={isIndeterminate} cursor="pointer" {...rest} size="lg" />
}
