import { useEffect, useMemo } from 'react'
import { Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { dictionarySorter } from '../../../../utils/index.js'

export const DictionaryInput = ({ dictionaryName, value, onChange, setValue, name, ...props }) => {
    const lov = useSelector((state) => state.app.lovs[dictionaryName])

    const preparedLov = useMemo(() => {
        const lovData = lov || []

        return lovData.filter((item) => !item.inactive).sort(dictionarySorter)
    }, [lov])

    useEffect(() => {
        if (preparedLov && preparedLov.length > 0) {
            setValue(name, preparedLov[0].name)
        }
    }, [preparedLov, setValue])

    if (!lov || lov.length === 0) {
        return (
            <Select size="lg">
                <option>No options available</option>
            </Select>
        )
    }

    return (
        <Select value={value} onChange={onChange} {...props} size="lg">
            {preparedLov.map((lovItem) => (
                <option key={lovItem.name} value={lovItem.name}>
                    {lovItem.value}
                </option>
            ))}
        </Select>
    )
}
