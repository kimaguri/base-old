import React from 'react'
import { SelectInput } from '../select-input/index.jsx'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { DictionaryInput } from '../dictionary-input/index.jsx'

const DynamicInput = ({
    type,
    label,
    technicalName,
    source,
    required,
    disabled,
    register,
    errors
}) => {
    const renderInput = () => {
        switch (type) {
            case 'select':
                return (
                    <SelectInput
                        technicalName={technicalName}
                        source={source}
                        register={register}
                        size="lg"
                    />
                )
            case 'dictionary':
                return (
                    <DictionaryInput
                        dictionaryName="fin_report_status"
                        technicalName="status"
                        size="lg"
                        register={register}
                    />
                )
            case 'text':
                return <Input size="lg" type="text" {...register(technicalName)} />
            default:
                return <React.Fragment />
        }
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
