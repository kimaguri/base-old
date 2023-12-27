import DatePicker from 'react-datepicker'
import { Input } from '@chakra-ui/react'

import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerInput = ({ value, onChange, dateFormat, ...props }) => {
    return (
        <DatePicker
            selected={value}
            onChange={onChange}
            customInput={<Input size="lg" {...props} />}
            dateFormat={dateFormat}
            {...props}
        />
    )
}
