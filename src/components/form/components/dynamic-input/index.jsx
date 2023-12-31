import { Controller } from 'react-hook-form'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

import { SelectInput } from '../select-input/index.jsx'
import { DictionaryInput } from '../dictionary-input/index.jsx'
import { DatePickerInput } from '../datepicker-input/index.jsx'

const DynamicInput = ({
    control,
    setValue,
    type,
    label,
    technicalName,
    source,
    dictionaryName,
    required,
    errors
}) => {
    const renderInput = () => {
        switch (type) {
            case 'select':
                return (
                    <Controller
                        name={technicalName}
                        control={control}
                        render={({ field }) => (
                            <SelectInput {...field} source={source} setValue={setValue} size="lg" />
                        )}
                    />
                )
            case 'dictionary':
                return (
                    <Controller
                        name={technicalName}
                        control={control}
                        render={({ field }) => (
                            <DictionaryInput
                                {...field}
                                dictionaryName={dictionaryName}
                                setValue={setValue}
                                size="lg"
                            />
                        )}
                    />
                )
            case 'date':
                return (
                    <Controller
                        name={technicalName}
                        control={control}
                        render={({ field: { onChange, value, ...field } }) => (
                            <DatePickerInput
                                {...field}
                                dateFormat="dd/MM/yyyy"
                                value={value ? new Date(value) : null}
                                onChange={(e) => onChange(new Date(e))}
                            />
                        )}
                    />
                )
            case 'hidden':
                return null   
            default:
                return <Input type="text" {...control.register(technicalName)} size="lg" />
        }
    }

    if (type === 'hidden') {
        return null
    }

    return (
        <FormControl mb={5} isRequired={required}>
            <FormLabel htmlFor={technicalName}>{label}</FormLabel>
            {renderInput()}
            {errors[technicalName] && <span>This field is required</span>}
        </FormControl>
    )
}

export default DynamicInput
