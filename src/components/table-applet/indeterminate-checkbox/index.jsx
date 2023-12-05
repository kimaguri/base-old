import { useEffect, useRef } from 'react'
import { Checkbox } from '@chakra-ui/react'

export const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
    const ref = useRef(null)

    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.isChecked && indeterminate
        }
    }, [ref, indeterminate, rest.isChecked])

    return <Checkbox ref={ref} cursor="pointer" {...rest} size="lg" />
}
